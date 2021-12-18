
import React from "react";
import { Outlet } from "react-router-dom";

import Form from "./Form.js";
import RecipesList from "./RecipesList.js";




class Recipes extends React.Component {


  state = {
    recipes: []
  }
  searchedRecipe = "";


  getRecipe = async (userInput) => {

    const recipeSearch = userInput.target.elements.recipeSearch.value;
    userInput.preventDefault();
    this.searchedRecipe = recipeSearch;
    const response = await fetch(`https://diws-backup-mod00.free.beeceptor.com/recipes`);
    const data = await response.json();
    this.setState({ recipes: data.recipes })
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="home">
        <div className="text-dark p-5 text-center" style={{ backgroundColor: "whitesmoke" }}>
          <div className="container-fluid d-flex-row rounded" style={{ backgroundColor: "white" }}>
            <div className="row py-3">
              <div className="col-3">
                <div className="row">
                  <div className="col-4">

                  </div>
                  <div className="col-4">
                    <button className="text-center fw-normal fs-5 form-control" type="button">
                      Add recipe
                    </button>
                  </div>
                  <div className="col-4">

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
                  {this.state.recipes.map((recipe) => {
                    const nameToLower = ((recipe.name).toString()).toLowerCase();
                    console.log(nameToLower);
                    const searchToLower = (((this.searchedRecipe).toString()).toLowerCase());
                    console.log(searchToLower);
                    console.log((nameToLower).includes(searchToLower));
                    if ((nameToLower).includes(searchToLower)) {
                      return (


                        <div className="col-4 d-flex py-2" key={recipe.id}>
                          <button className="card btn btn-primary mx-auto"
                            style={{
                              width: "18rem", "backgroundImage": `url(https://i.gyazo.com/de55784f14242dce6fec456af799be1f.jpg)`,
                              backgroundSize: "cover"
                            }}>
                            <div className="py-5"></div>
                            <div className="py-5"></div>
                            <div className="card-body align-middle container-fluid rounded"
                              style={{ backgroundColor: "white", opacity: "0.9" }}>

                              <div className="row">
                                <div className="col-8">
                                  <h5 className="card-title text-start" style={{ color: "#ff80c4" }}>{recipe.name}
                                  </h5>
                                </div>
                                <div className="col-4">
                                  <span className="text-end text-dark" style={{ fontSize: "80%" }}>4hrs <i
                                    className="bi bi-alarm"></i></span>
                                </div>
                              </div>
                              <div className="card-text text-dark fs-6 fw-light text-start">

                                <div className="pt-1" style={{ fontSize: "75%" }}>
                                  Cocoa powder, flour, whipped cream, eggs, chocolate sauce
                                </div>

                                <div className="row align-items-center pt-1">

                                  <div className="col-8">
                                    <i className="bi bi-star" style={{ color: "orange" }}></i>
                                    <i className="bi bi-star" style={{ color: "orange" }}></i>
                                    <i className="bi bi-star" style={{ color: "orange" }}></i>
                                    <i className="bi bi-star" style={{ color: "orange" }}></i>
                                    <i className="bi bi-star" style={{ color: "orange" }}></i>
                                    (389)
                                  </div>
                                  <div className="col-4 text-end">
                                    Author
                                  </div>
                                </div>



                              </div>


                            </div>
                          </button>

                        </div>



                      )

                    }



                  })}

                </div>


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


export default Recipes;