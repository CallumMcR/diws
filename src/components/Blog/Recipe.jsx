import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";
import moment from "moment";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class Recipe extends React.Component {

  state = {
    activeRecipe: [],
    listOfInstructions: [],
    listOfSteps: [],
    listOfAdditionalInstructions: [],
    listOfAdditionalSteps: [],
    listOfIngredients: [],
    listOfImages: [],
    listOfNutrients: [],
    activeAuthor: [],
    socialMediaLinks: [],
    relatedRecipes: []
  }


  componentDidMount = async () => {
    const idNum = (this.props.params).uuid;
    const req = await fetch(`https://diws-backup-mod00.free.beeceptor.com/recipes`);
    const res = await req.json();
    var relatedRecipes = [];
    var recipeCategoriesToMatch = [];

    res.recipes.forEach((displayRecipe) => {
      if (displayRecipe.id == idNum) {
        this.setState({ activeRecipe: displayRecipe });
        recipeCategoriesToMatch = displayRecipe.categories;
      }
    });


    res.recipes.map((recipe) => { // This is for generating related recipes based on matching categories
      var notAlreadyInList = true
      recipe.categories.map((category) => {
        if (recipeCategoriesToMatch.includes(category) && notAlreadyInList == true) { // If we don't want to check the same recipe again
          relatedRecipes.push(recipe);
          notAlreadyInList = false
        }
      });
    });
    relatedRecipes.slice(0, 6);
    this.setState({ relatedRecipes: relatedRecipes })




    const requestAuthors = await fetch(`https://diws-backup-mod00.free.beeceptor.com/authors`);
    const responseAuthors = await requestAuthors.json();
    responseAuthors.forEach((individualAuthor) => {
      if (individualAuthor.user == this.state.activeRecipe.author) {
        this.setState({ activeAuthor: individualAuthor });
      }
    });


    // Set state has been used for each individual array that is nested within the main recipe array.
    // This is because the program is unable to map it direct from the parent array.
    // State is an async method, and because of this, all usage of state has to be done in componentDidMount
    // to ensure the data is stored before its rendered

    this.setState({ socialMediaLinks: this.state.activeAuthor.sociallinks });

    this.setState({ listOfInstructions: this.state.activeRecipe.instructions });
    this.setState({ listOfSteps: this.state.listOfInstructions[0].steps });

    if (this.state.activeRecipe.secondaryinstructions.length > 0) {
      this.setState({ listOfAdditionalInstructions: this.state.activeRecipe.secondaryinstructions })
      this.setState({ listOfAdditionalSteps: this.state.listOfAdditionalInstructions[0].steps })
    }
    this.setState({ listOfIngredients: this.state.activeRecipe.ingredients });
    this.setState({ listOfImages: this.state.activeRecipe.images });
    this.setState({ listOfNutrients: this.state.activeRecipe.nutrition });

  }



  render() {
    return (
      <div className="home">

        <div className="text-dark p-5 text-center" style={{ backgroundColor: "white" }}>
          <div className="container-fluid row d-flex">

            <div className="col-lg-8 align-items-center rounded py-3" style={{ backgroundColour: "white" }}>
              <h1>
                {this.state.activeRecipe.name}
              </h1>
            </div>

            <div className="col-4 rounded py-3 d-none d-lg-block" style={{ backgroundColour: "white" }}>
              <h1 className="text-dark">Related Recipes</h1>
            </div>

            <hr style={{ marginbottom: "0px" }} />

          </div>

          <div className="container-fluid row">


            <div className="col-lg-8 align-items-center rounded py-3" style={{ backgroundColour: "white" }}>


              <div className="py-3 container-fluid justify-content-center align-items-center d-flex"
                style={{ backgroundColour: "white" }}>

                <div className="container-fluid">



                  <div className="rounded" style={{ objectfit: "cover" }}>

                    <Carousel>
                      {this.state.listOfImages.map((image, index) => (
                        <Carousel.Item key={index}>
                          <img
                            className="rounded d-block w-100"
                            style={{ position: "center", objectFit: "cover", width: "26rem", height: "26rem" }}
                            src={image}
                            alt="..."
                          />

                        </Carousel.Item>
                      ))}
                    </Carousel>



                  </div>

                  <div className="py-3">

                  </div>

                  <div className="container-fluid border rounded-top" style={{ backgroundColor: "#ff80c4", color: "white" }}>

                    <h1 className="py-3 fw-normal">About Recipe</h1>

                  </div>

                  <div className="container-fluid border text-center border-top-0 rounded-bottom">

                    <div className="row pt-2 fs-5 text-center">
                      <div className="col-4">
                        Preperation Time: {moment(this.state.activeRecipe.preptime, ["hmm", "mm", "h"]).format("HH:mm")}
                      </div>
                      <div className="col-4 fw-bold">
                        Difficulty: {this.state.activeRecipe.difficulty}
                      </div>
                      <div className="col-4">
                        Cook Time: {moment(this.state.activeRecipe.cooktime, ["hmm", "mm", "h"]).format("HH:mm")}
                      </div>
                    </div>

                    <div className="pt-4 fs-5 text-center">
                      Yields: {this.state.activeRecipe.yield}
                    </div>
                    <hr />
                    <div className="text-center fs-5 pt-2 pb-4 fw-bold text-decoration-underline">
                      Description
                    </div>
                    <p className="container-fluid pb-4 fs-5 text-center">
                      {this.state.activeRecipe.description}
                    </p>
                    <hr />
                    <div className="text-center fs-5 pt-2 pb-4 fw-bold text-decoration-underline">
                      Nutritional values
                    </div>

                    <table className="table table-striped table-hover border">
                      <thead>
                        <tr>
                          <th scope="col">Serving</th>
                          <th scope="col">Calories</th>
                          <th scope="col">Fat</th>
                          <th scope="col">Saturate</th>
                          <th scope="col">Carbohydrates</th>
                          <th scope="col">Sugars</th>
                          <th scope="col">Fibre</th>
                          <th scope="col">Protein</th>
                          <th scope="col">Salt</th>

                        </tr>
                      </thead>
                      <tbody>

                        {this.state.listOfNutrients.map((nutrient, index) => (
                          <tr key={index}>
                            <td>
                              {Capitalize(nutrient.serving)}

                            </td>
                            <td>
                              {nutrient.kcal}
                            </td>
                            <td>
                              {nutrient.fat}
                            </td>
                            <td>
                              {nutrient.saturates}
                            </td>
                            <td>
                              {nutrient.carbs}
                            </td>
                            <td>
                              {nutrient.sugars}
                            </td>
                            <td>
                              {nutrient.fibre}
                            </td>
                            <td>
                              {nutrient.protein}
                            </td>
                            <td>
                              {nutrient.salt}
                            </td>

                          </tr>

                        ))}

                      </tbody>
                    </table>

                  </div>


                  <div className="py-3">


                  </div>

                  <div className="py-3">

                  </div>


                  <div className="container-fluid border rounded">

                    <div className="accordion accordion-flush py-2" id="accordionFlushIngredients">

                      <div className="accordion-item">

                        <h2 className="accordion-header" id="flush-headingIngredients">

                          <button className="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseIngredients"
                            aria-expanded="false" aria-controls="flush-collapseIngredients">
                            <h1 className="text-center align-items-center">Ingredients</h1>
                          </button>

                        </h2>

                        <hr />

                        <div id="flush-collapseIngredients" className="accordion-collapse collapse"
                          aria-labelledby="flush-headingIngredients"
                          data-bs-parent="#accordionFlushIngredients">

                          <div className="accordion-body rounded">
                            <table className="table table-striped table-hover border">
                              <thead>
                                <tr>
                                  <th scope="col">Ingredient</th>
                                  <th scope="col">Measurement</th>
                                  <th scope="col">Notes</th>

                                </tr>
                              </thead>
                              <tbody>

                                {this.state.listOfIngredients.map((ingredient, index) => (
                                  <tr key={index}>
                                    <td>
                                      {Capitalize(ingredient.ingredient) == true ? `${Capitalize(ingredient.ingredient)}` :
                                        `${Capitalize(ingredient.ingredient)}`}

                                    </td>
                                    <td>
                                      {ingredient.measurementweight && ingredient.measurementtype ? `${ingredient.measurementweight}${ingredient.measurementtype}` :
                                        (ingredient.measurementsize == null ? `N/A` : `${ingredient.measurementsize}`)}
                                    </td>



                                    <th>

                                      {ingredient.note != null ? `${Capitalize(ingredient.note)}` :
                                        `N/A`}

                                    </th>
                                  </tr>

                                ))}

                              </tbody>
                            </table>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>


                  <div className="py-3">

                  </div>

                  <div className="container-fluid border rounded">

                    <div className="accordion accordion-flush py-2" id="accordionFlushInstructions">

                      <div className="accordion-item">

                        <h2 className="accordion-header" id="flush-headingInstructions">

                          <button className="accordion-button collapsed" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseInstructions"
                            aria-expanded="false" aria-controls="flush-collapseInstructions">
                            <h1 className="text-center align-items-center">Instructions</h1>
                          </button>

                        </h2>

                        <hr />




                        <div id="flush-collapseInstructions" className="accordion-collapse collapse"
                          aria-labelledby="flush-headingInstructions"
                          data-bs-parent="#accordionFlushInstructions">

                          <div className="accordion-body rounded">

                            {this.state.listOfSteps.map((step, index) => (

                              <div key={index + step}>
                                <li key={index} className='fw-bold fs-4 text-start pt-5'>
                                  Step {index + 1}:
                                </li>
                                <div key={step} className='fw-normal fs-6 text-start'>
                                  {step}
                                </div>
                              </div>


                            ))}



                            <div className="py-3">

                            </div>
                            {this.state.listOfAdditionalInstructions.length > 0 &&
                              <div>
                                <div className="accordion-header" id="flush-heading2ndInstructions">
                                  <hr />

                                  <button className="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse2ndInstructions"
                                    aria-expanded="false" aria-controls="flush-collapse2ndInstructions">
                                    <h5 className="text-center align-items-center">Additional Instructions
                                    </h5>
                                  </button>

                                </div>

                                <hr />

                                <div id="flush-collapse2ndInstructions"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="flush-heading2ndInstructions"
                                  data-bs-parent="#accordionFlush2ndInstructions">

                                  <div className="accordion-body rounded">
                                    {this.state.listOfAdditionalSteps.map((addStep, index) => (
                                      <div key={addStep + index}>
                                        <li key={index} className='fw-bold fs-4 text-start pt-5'>
                                          Step {index + 1}:
                                        </li>
                                        <div key={addStep} className='fw-normal fs-6 text-start'>
                                          {addStep}
                                        </div>
                                      </div>


                                    ))}

                                  </div>

                                </div>
                              </div>
                            }
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>


                </div>
              </div>

              <div className="border rounded border-3 bg-light">
                <div className="row">

                  <div className="col-xl-7 text-center align-items-center d-flex">
                    {this.state.socialMediaLinks.map((link, index) => (
                      <div key={index} className="row container-fluid align-items-center text-center">



                        {(link.facebook !== 'undefined' && link.facebook !== null) &&
                          <div className="col-4 align-items-center text-center">
                            <button id="myFacebook" className="btn" style={{ color: "#ff80c4" }} name="facebook" onClick={() => window.open(link.facebook)}
                            >
                              <div className="bi bi-facebook"></div>
                              FaceBook
                            </button>

                          </div>
                        }

                        {(link.instagram !== 'undefined' && link.instagram !== null) &&
                          <div className="col-4">
                            <button id="myInstagram" className="btn" style={{ color: "#ff80c4" }} name="instagram" onClick={() => window.open(link.instagram)}
                            >
                              <div className="bi bi-instagram"></div>
                              Instagram
                            </button>
                          </div>
                        }

                        {(link.twitter !== 'undefined' && link.twitter !== null) &&
                          <div className="col-4 align-items-center text-center">
                            <button id="myTwitter" className="btn" style={{ color: "#ff80c4" }} name="twitter" onClick={() => window.open(link.twitter)}
                            >
                              <div className="bi bi-twitter"></div>
                              Twitter
                            </button>
                          </div>
                        }
                      </div>



                    ))}
                  </div>


                  <div className="col-xl-5 justify-content-around">

                    <div className="container-fluid row align-items-center d-flex">
                      <div className="col-8">
                        <div className="text-center">
                          Made by: <strong>{this.state.activeRecipe.author}</strong>
                        </div>
                      </div>
                      <div className="col-3">
                        <img src={this.state.activeAuthor.profileimage}
                          className="rounded-circle float-end img-fluid" alt="author"
                          style={{ width: "60px", height: "60px" }} />

                      </div>

                    </div>

                  </div>
                </div>
              </div>


            </div>

            {/* Related Recipes display */}


            {/*this.state.relatedRecipes.map((recipe, index) => { // This is for generating related recipes based on matching categories
              })*/}



            <div className="col-lg-4 rounded" style={{ backgroundColour: "white" }}>



              <div className="container-fluid rounded py-5"
                style={{ backgroundColor: "white", marginleft: "0px", marginright: "0px" }}>




                {this.state.relatedRecipes.map((recipe, index) => {





                  <div className="row border border-3 rounded" style={{ bordercolor: "#ff80c4" }}>







                    <div className="row container-fluid py-2 rounded justify-content-center"
                      style={{ marginright: "0px", marginleft: "0px", paddingright: "0px", paddingleft: "0px" }}>


                      <div className="col-xl-5">
                        <img src={`${recipe.thumbnail}`} className="float-start img-thumbnail"
                          alt="Thumbnail"
                          style={{ width: "150px", height: "150px", minwidth: "50px", minheight: "50px", padding: "0px" }} />
                      </div>


                      <div className="col-7 text-start" style={{ paddingleft: "0px" }}>
                        <div className="container py-1 text-start fw-bold" style={{ paddingleft: "12px" }}>
                          {recipe.name.length <= 15 ? `${recipe.name}` :
                            `${recipe.name.substring(0, 13)}...`}
                        </div>
                        <div className="container py-1 text-start fw-light" style={{ paddingleft: "12px" }}>
                          {recipe.decription.length <= 40 ? `${recipe.description}` :
                            `${recipe.description.substring(0, 36)}...`}
                        </div>



                        <div className="row container-fluid rounded align-items-center"
                          style={{ paddingright: "0px" }}>
                          <div className="col-md-7 text-start">
                            {recipe.author}

                          </div>
                          
                        </div>


                      </div>

                    </div>



                  </div>


                })}






              </div>

            </div>


          </div>



        </div>
      </div >
    );
  }
}


export default (props) => (
  <Recipe
    {...props}
    params={useParams()} />
);