
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./Form.js";
import moment from "moment";
import Pagination from "./Pagination.js";
import { useParams } from "react-router";


const recipesPerPage = 3;
const apiURL = `https://getbakingtestapi.free.beeceptor.com/recipes`


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




class Recipes extends React.Component {


  state = {
    allRecipes:[],
    recipes: [],
    currentRecipes: [],
    currentPage: 1,
    prevPage: 1,
    firstPageBoolean: true,
    usingFilter:false
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
    this.setState({recipes:[]}); // Ensure we are not going to be adding recipes to an already
    // existing recipes list

    // Now we filter the data to get only the recipes we want
    this.state.allRecipes.forEach(recipe => {
      const nameToLower = ((recipe.name).toString()).toLowerCase();
      const searchToLower = (((this.searchedRecipe).toString()).toLowerCase());
      
      if ((nameToLower).includes(searchToLower)) {
        ListOfRecipesWeFilterBy.push(recipe);
      }
    })
    this.setState({usingFilter:true});
    this.setState({recipes:ListOfRecipesWeFilterBy});
    console.log("Filtered ones"+this.state.recipes);
    console.log("Original all recipes"+ this.state.allRecipes);

    const indexOfLastRecipe = this.state.currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    this.setState({ currentPage: (this.props.params).pageNumber });
    this.setState(
      { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
    )


  }// Works as expected
  

  componentDidMount = async () => { // When its getting from api
    if(this.state.usingFilter==false)
    {
      
      const responseForAllRecipes = await fetch(apiURL);
      const dataForAllRecipes = await responseForAllRecipes.json();
      this.setState({ recipes: dataForAllRecipes.recipes });
      console.log("Made it to did mount");
    }
    
    const indexOfLastRecipe = this.state.currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    this.setState({ currentPage: (this.props.params).pageNumber });
    this.setState(
      { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
    )
  }


  paginate = () => {
    this.setState({ prevPage: this.state.currentPage });
    this.setState(
      { currentPage: (this.props.params).pageNumber }
    )
  }

  componentDidUpdate = async () => {
    const indexOfLastRecipe = this.state.currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

    if (this.state.currentPage == this.state.prevPage && this.state.currentPage != 1) {
      this.setState({ currentPage: (this.props.params).pageNumber });
      this.setState(
        { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
      )
      this.setState({ firstPageBoolean: true });
    }
    else if (this.state.currentPage == 1 && this.state.prevPage == 1 &&
      this.state.firstPageBoolean == true) {

      this.setState({ currentPage: (this.props.params).pageNumber });
      this.setState(
        { currentRecipes: this.state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe) }
      )
      this.setState({ firstPageBoolean: false });
    }

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
                    <div className="dropdown container-fluid">
                      <button className="form-control dropdown-toggle rounded-0 shadow-sm" type="button"
                        id="recipeFiltrationButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Filter
                      </button>
                      <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="recipeFiltrationButton">
                        <li><a className="dropdown-item">Most popular</a></li>
                        <li><a className="dropdown-item">Most recent</a></li>
                        <li><a className="dropdown-item">Christmas Recipes</a></li>
                        <li><a className="dropdown-item">Easter Recipes</a></li>
                        <li><a className="dropdown-item">Halloween Recipes</a></li>

                      </ul>
                    </div>
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


                        <div className="col-4 d-flex py-2" key={recipe.id}>
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
                                  <div className="pt-1" style={{ fontSize: "75%" }}>
                                    Cocoa powder, flour, whipped cream, eggs, chocolate sauce
                                  </div>

                                  <div className="row align-items-center pt-1">

                                    <div className="col-12">
                                      <i className="bi bi-star" style={{ color: "orange" }}></i>
                                      <i className="bi bi-star" style={{ color: "orange" }}></i>
                                      <i className="bi bi-star" style={{ color: "orange" }}></i>
                                      <i className="bi bi-star" style={{ color: "orange" }}></i>
                                      <i className="bi bi-star" style={{ color: "orange" }}></i>
                                      (300)
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
                  paginate={this.paginate} />
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



export default (props) => (
  <Recipes
    {...props}
    params={useParams()} />
);