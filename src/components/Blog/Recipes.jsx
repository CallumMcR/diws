
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form.js";
import moment from "moment";
import Pagination from "./Pagination.js";
import FilterButton from "./FilterButton.js";



// Current bugs:
// 1. Switching pages when using filters returns to list all recipes
// Problem is we are using href, so whole page is relkoading and re-setting variables

const recipesPerPage = 3;
const apiURL = `https://get-baking-recipes-api.free.beeceptor.com/recipes`


function getRecipeTime(cooktime, preptime) {
  var cookTimeHrs = moment(cooktime, ["hmm", "mm", "h"]).format("HH");
  var cookTimeMins = moment(cooktime, ["hmm", "mm", "h"]).format("mm");
  var prepTimeHrs = moment(preptime, ["hmm", "mm", "h"]).format("HH");
  var prepTimeMins = moment(preptime, ["hmm", "mm", "h"]).format("mm");
  var totalHours = parseInt(cookTimeHrs) + parseInt(prepTimeHrs);
  var totalMinutes = parseInt(cookTimeMins) + parseInt(prepTimeMins);
  while (totalMinutes > 60) // while totalminutes is greater than 60
  {
    totalMinutes -= 60;
    totalHours += 1;
  }
  if (totalHours > 0) {
    return (totalHours + "hrs ");
  }
  else {
    return (totalMinutes + "mins ");
  }
}
function Capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
function getListOfIngredients(recipe){
  var stringOfIngredients="";
  for(var i =0;i<recipe.ingredients.length;i++)
  {
    var capitalisedFirstChar = Capitalize(recipe.ingredients[i].ingredient);
    stringOfIngredients+=capitalisedFirstChar;
    if(i!=recipe.ingredients.length-1)
    {
      stringOfIngredients+=", "
    }
  }
  return stringOfIngredients;
}


class Recipes extends React.Component {


  state = {
    allRecipes: [], // This contains all the recipes received from the api
    recipes: [], // This contains all the recipes that have been filtered out, or not
    // if no filter was used
    currentRecipes: [], // This contains the recipes to be displayed per page
    currentPage: 1,
    prevPage: 0,
    usingFilter: false // Used to check if we need to call the api. Essentially if
    // this is the first time the page as been loaded
  }
  searchedRecipe = "";

  getRecipe = async (userInput) => {
    const recipeSearch = userInput.target.elements.recipeSearch.value;
    userInput.preventDefault();
    this.searchedRecipe = recipeSearch;
    const response = await fetch(apiURL);
    const data = await response.json();
    this.setState({ allRecipes: data.recipes }) // Get all recipes
    const ListOfRecipesWeFilterBy = [];
    this.setState({ recipes: [] }); // Ensure we are not going to be adding recipes to an already
    // existing recipes list

    // Now we filter the data to get only the recipes we want
    this.state.allRecipes.forEach(recipe => {
      const nameToLower = ((recipe.name).toString()).toLowerCase();
      const searchToLower = (((this.searchedRecipe).toString()).toLowerCase());

      if ((nameToLower).includes(searchToLower)) {
        ListOfRecipesWeFilterBy.push(recipe);
      }
    })
    this.setState({ currentPage: 1 }); // Returns user to first page of recipes
    this.setState({ prevPage: 0 });
    this.setState({ recipes: ListOfRecipesWeFilterBy });
    const indexOfLastRecipe = this.state.currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;


    this.setState(
      { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
    )
    console.log("getrecipe");
  }


  componentDidMount = async () => { // When its getting from api

    if (this.state.usingFilter == false) {
      const responseForAllRecipes = await fetch(apiURL);
      const dataForAllRecipes = await responseForAllRecipes.json();
      this.setState({ allRecipes: dataForAllRecipes.recipes });
      this.setState({ recipes: dataForAllRecipes.recipes });
      this.setState({ usingFilter: true }); // We only want to get all the data from the api once
      console.log("first conditional: " + this.state.usingFilter);
    };

    const indexOfLastRecipe = this.state.currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    this.setState(
      { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
    )
    console.log("did mount");
  }


  paginate = (pageNumber) => {
    console.log("This is the pagenumber we recieved: " + pageNumber);
    this.setState({ prevPage: this.state.currentPage });
    this.setState({ currentPage: pageNumber }, () => {
      //callback
      console.log(this.state.currentPage) // myname
    });
    console.log("paginate prev: " + this.state.prevPage + " curpage " + this.state.currentPage);
  }

  componentDidUpdate = async () => {
    const indexOfLastRecipe = this.state.currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

    if (this.state.currentPage !== this.state.prevPage) {
      this.setState(
        { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
      )
      this.setState({ prevPage: this.state.currentPage });
    }
    console.log(this.state.currentPage + " prev page-> " + this.state.prevPage);
    console.log("update");

  }


  getRecipeByFilter = async (filterType) => {
    if (filterType == "mostPopular") {
      // ? 1:-1 flips the sort so we get it with highest first
      // sort by recipes so we keep applied filter
      this.setState({
        recipes:
          (this.state.recipes).sort((a, b) => a.numberOfRatings < b.numberOfRatings ? 1 : -1)
      });
    }
    else if (filterType == "recent") {
      this.setState({
        recipes:
          (this.state.recipes).sort((a, b) => moment(a.created).format() < moment(b.created).format() ? 1 : -1)
      });
    }
    else if (filterType == "xmas") {
      const xmasRecipes = [];
      this.state.recipes.map((recipe) => {
        var submit = false;
        if (submit == false) { // If we dont need to submit continue to loop through each recipes category 
          recipe.categories.map((category) => {
            if (category == "Christmas") {
              xmasRecipes.push(recipe);
              submit = true;
            }
          });
        }

      });
      this.setState({ recipes: xmasRecipes });
    }
    else if (filterType == "easter") {
      const easterRecipes = [];
      this.state.recipes.map((recipe) => {
        var submit = false;
        if (submit == false) { // If we dont need to submit continue to loop through each recipes category 
          recipe.categories.map((category) => {
            if (category == "Easter") {
              easterRecipes.push(recipe);
              submit = true;
            }
          });
        }

      });
      this.setState({ recipes: easterRecipes });
    }
    else if (filterType == "halloween") {
      const halloweenRecipes = [];
      this.state.recipes.map((recipe) => {
        var submit = false;
        if (submit == false) { // If we dont need to submit continue to loop through each recipes category 
          recipe.categories.map((category) => {
            if (category == "Halloween") {
              halloweenRecipes.push(recipe);
              submit = true;
            }
          });
        }

      });
      this.setState({ recipes: halloweenRecipes });
    }
    else if (filterType == "all") {
      this.setState({ recipes: this.state.allRecipes });
    }

    const indexOfLastRecipe = this.state.currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    this.setState(
      { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
    )
    this.setState({ prevPage: 0 });
    this.setState({ currentPage: 1 });

    console.log("filter");
  }


  render() {
    return (
      <div className="home">

        <div className="text-dark p-5 text-center" style={{ backgroundColor: "whitesmoke" }}>
          <div className="container-fluid d-flex-row rounded" style={{ backgroundColor: "white" }}>
            <div className="row pt-3 align-items-center d-flex">
              <div className="col-3">
                <div className="row">
                  <div className="col-3">

                  </div>
                  <div className="col-6">
                    <button className="text-center fw-normal fs-5 form-control"
                      type="button">
                      Add recipe
                    </button>
                  </div>
                  <div className="col-3">

                  </div>
                </div>
              </div>

              <div className="col-6">
                <Form getRecipe={this.getRecipe} />
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col-3">

                  </div>
                  <div className="col-6">
                    <FilterButton getRecipeByFilter={this.getRecipeByFilter} />
                  </div>
                  <div className="col-3">

                  </div>
                </div>
              </div>
            </div>
            <hr></hr>

            <div className="row">
              <div className="col-2">

              </div>
              <div className="col-8">


                <div className="row py-3">
                  {this.state.currentRecipes.map((recipe) => {
                    return (


                      <div className="col-xl-4 d-flex py-2" key={recipe.id}>
                        <Link style={{ textDecoration: 'none' }}
                          to={{
                            pathname: `recipe/${recipe.id}`,
                            state: { recipe: recipe.id }
                          }}>
                          <button className="card btn btn-primary mx-auto"
                            style={{
                              width: "18rem",
                              "backgroundImage": `url(${recipe.thumbnail}})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover"
                            }}>
                            <div className="py-5"></div>
                            <div className="py-5"></div>
                            <div className="card-body align-middle container-fluid rounded"
                              style={{ backgroundColor: "white", opacity: "0.9" }}>

                              <div className="row">
                                <div className="col-8">
                                  <h5 className="card-title text-start" style={{ color: "#ff80c4" }}>
                                    {recipe.name.length <= 15 ? `${recipe.name}` :
                                      `${recipe.name.substring(0, 13)}...`}
                                  </h5>
                                </div>
                                <div className="col-4">
                                  <span className="text-end text-dark"
                                    style={{ fontSize: "80%" }}>

                                    {getRecipeTime(recipe.cooktime, recipe.preptime)}
                                    <i
                                      className="bi bi-alarm"></i></span>
                                </div>

                              </div>

                              <div className="card-text text-dark fs-6 fw-light text-start">
                                <div className="text-start" style={{ fontSize: "75%", color: "blue" }}>
                                  {recipe.author}
                                </div>
                                <div className="pt-1" style={{ fontSize: "75%",height:"40px",overflow:"hidden" }}>
                                  {getListOfIngredients(recipe) <= 70 ? `${getListOfIngredients(recipe)}` :
                                      `${getListOfIngredients(recipe).substring(0, 67)}...`}
                                </div>

                                <div className="row align-items-center pt-1">

                                  <div className="col-12">
                                    {recipe.stars >= 1 ? <i className="bi bi-star-fill" style={{ color: "orange" }}></i> : <i className="bi bi-star" style={{ color: "orange" }}></i>}
                                    {recipe.stars >= 2 ? <i className="bi bi-star-fill" style={{ color: "orange" }}></i> : <i className="bi bi-star" style={{ color: "orange" }}></i>}
                                    {recipe.stars >= 3 ? <i className="bi bi-star-fill" style={{ color: "orange" }}></i> : <i className="bi bi-star" style={{ color: "orange" }}></i>}
                                    {recipe.stars >= 4 ? <i className="bi bi-star-fill" style={{ color: "orange" }}></i> : <i className="bi bi-star" style={{ color: "orange" }}></i>}
                                    {recipe.stars >= 5 ? <i className="bi bi-star-fill" style={{ color: "orange" }}></i> : <i className="bi bi-star" style={{ color: "orange" }}></i>}
                                    ({recipe.numberOfRatings})
                                  </div>


                                </div>



                              </div>


                            </div>

                          </button>
                        </Link>

                      </div>



                    )



                  })}

                </div>

                <Pagination
                  recipesPerPage={recipesPerPage}
                  totalRecipes={this.state.recipes.length}
                  paginate={this.paginate}
                  curPage={this.state.currentPage} />
              </div>
              <div className="col-2">

              </div>
            </div>
          </div>
          <div className="col-2">

          </div>
        </div>
      </div>
    );
  }
}



export default Recipes