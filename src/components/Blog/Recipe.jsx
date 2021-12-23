import React, { useEffect } from "react";
import { useParams } from "react-router";

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
    listOfImages: []
  }


  componentDidMount = async () => {
    const idNum = (this.props.params).uuid;
    const req = await fetch(`https://getbakingtestapi.free.beeceptor.com/recipes`);
    const res = await req.json();
    res.recipes.forEach((displayRecipe) => {
      if (displayRecipe.id == idNum) {
        this.setState({ activeRecipe: displayRecipe });
      }
    });

    this.setState({ listOfInstructions: this.state.activeRecipe.instructions });
    this.setState({ listOfSteps: this.state.listOfInstructions[0].steps });

    if (this.state.activeRecipe.secondaryinstructions.length > 0) {
      this.setState({ listOfAdditionalInstructions: this.state.activeRecipe.secondaryinstructions })
      this.setState({ listOfAdditionalSteps: this.state.listOfAdditionalInstructions[0].steps })
    }
    this.setState({ listOfIngredients: this.state.activeRecipe.ingredients });
    this.setState({ listOfImages: this.state.activeRecipe.images });

  }



  render() {
    return (
      <div className="home">

        <div className="text-dark p-5 text-center" style={{ backgroundColor: "white" }}>
          <div className="container-fluid row d-flex">

            <div className="col-lg-8 align-items-center rounded py-3" style={{ backgroundColour: "white" }}>
              <h1>{this.state.activeRecipe.name}</h1>
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

                <div className="container-fluid row">

                  <div className="col-3">

                  </div>

                  <div className="col-6 align rounded" style={{ objectfit: "cover" }}>

                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                      <div className="carousel-indicators">

                        {this.state.listOfImages.map(index => {

                          <button type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index} className="active" aria-current="true"
                            aria-label={"Slide " + index}>
                          </button>


                        })}

                      </div>

                      <div className="carousel-inner py-2 d-flex align-items-center rounded"
                        style={{ height: "350px", overflow: "hidden", objectfit: "cover" }}>


                        {this.state.listOfImages.map((image, index) => {


                          {
                            index == 0
                              ? <div key={index} className="carousel-item active">
                                <img src={image}
                                  className="d-block w-100 rounded img-fluid" alt="..." />

                              </div>
                              : <div key={index} className="carousel-item">
                                <img src={image}
                                  className="d-block w-100 rounded img-fluid" alt="..." />

                              </div>
                          }


                        })}



                    </div>

                    <button className="carousel-control-prev" type="button"
                      data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button"
                      data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>

                  </div>

                </div>

                <div className="col-3">

                </div>

                <div className="py-3">

                </div>

                <div className="container-fluid border rounded-top" style={{ backgroundColor: "#ff80c4", color: "white" }}>

                  <h1 className="py-3 fw-normal">About Recipe</h1>

                </div>

                <div className="container-fluid border text-center border-top-0 rounded-bottom">

                  <p className="container-fluid py-4 fs-5 text-center">
                    {this.state.activeRecipe.description}
                  </p>

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
                          <table className="table table-striped table-hover">
                            <thead>
                              <tr>
                                <th scope="col">Ingredient</th>
                                <th scope="col">Measurement</th>
                                <th scope="col">Notes</th>

                              </tr>
                            </thead>
                            <tbody>

                              {this.state.listOfIngredients.map(ingredient => (
                                <tr key={ingredient.ingredient}>
                                  <td>
                                    {Capitalize(ingredient.ingredient) == true ? `${Capitalize(ingredient.ingredient)}` :
                                      `${Capitalize(ingredient.ingredient)}`}

                                  </td>
                                  <td>
                                    {ingredient.measurementweight && ingredient.measurementtype ? `${ingredient.measurementweight}${ingredient.measurementtype}` :
                                      `${ingredient.measurementsize}`}
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
                          {this.state.activeRecipe.secondaryinstructions > 0 &&
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
                  <div className="row container-fluid align-items-center text-center">

                    <div className="col-3 align-items-center text-center">
                      <button id="myFacebook" className="btn" style={{ color: "#ff80c4" }} name="facebook"
                        type="submit">
                        <div className="bi bi-facebook"></div>
                        FaceBook
                      </button>

                    </div>

                    <div className="col-3 align-items-center text-center">
                      <button id="myTwitter" className="btn" style={{ color: "#ff80c4" }} name="twitter"
                        type="submit">
                        <div className="bi bi-twitter"></div>
                        Twitter
                      </button>
                    </div>

                    <div className="col-3">
                      <button id="myPinterest" className="btn" style={{ color: "#ff80c4" }} name="pinterest"
                        type="submit">
                        <div className="bi bi-pinterest"></div>
                        Pinterest
                      </button>
                    </div>

                    <div className="col-3">
                      <button id="myInstagram" className="btn" style={{ color: "#ff80c4" }} name="instagram"
                        type="submit">
                        <div className="bi bi-instagram"></div>
                        Instagram
                      </button>
                    </div>

                  </div>
                </div>


                <div className="col-xl-5 justify-content-around">

                  <div className="container-fluid row align-items-center justify-content-center">
                    <div className="col-4">
                      <div className="text-center">
                        Made by:
                      </div>
                    </div>

                    <div className="col-4 text-center">
                      <div className="fw-bold text-center">
                        {this.state.activeRecipe.author}
                      </div>
                    </div>
                    <div className="col-3">
                      <img src="pictures/userProfile/blankUserImg.png"
                        className="rounded-circle float-end img-responsive" alt="author"
                        style={{ width: "60px", height: "60px" }} />

                    </div>

                  </div>

                </div>
              </div>
            </div>


          </div>


          <div className="col-lg-4 rounded" style={{ backgroundColour: "white" }}>


            <div className="container-fluid rounded py-5"
              style={{ backgroundColor: "white", marginleft: "0px", marginright: "0px" }}>

              <div className="row border border-3 rounded" style={{ bordercolor: "#ff80c4" }}>


                <div className="row container-fluid py-2 rounded justify-content-center"
                  style={{ marginright: "0px", marginleft: "0px", paddingright: "0px", paddingleft: "0px" }}>


                  <div className="col-xl-5">
                    <img src="pictures/chocolateCake/chococake1.jpg" className="float-start img-thumbnail"
                      alt="Thumbnail"
                      style={{ width: "150px", height: "150px", minwidth: "50px", minheight: "50px", padding: "0px" }} />
                  </div>


                  <div className="col-7 text-start" style={{ paddingleft: "0px" }}>
                    <div className="container py-1 text-start fw-bold" style={{ paddingleft: "12px" }}>
                      Chocolate Cake
                    </div>
                    <div className="container py-1 text-start fw-light" style={{ paddingleft: "12px" }}>
                      Triple layered Chocolate Cake of wonders and fun
                    </div>



                    <div className="row container-fluid rounded align-items-center"
                      style={{ paddingright: "0px" }}>
                      <div className="col-md-7 text-start">
                        Author Name

                      </div>
                      <div className="col-5">
                        <img src="pictures/userProfile/blankUserImg.png"
                          className="rounded-circle float-end img-responsive"
                          alt="author" style={{ width: "60px", height: "60px" }} />
                      </div>

                    </div>


                  </div>

                </div>



              </div>
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