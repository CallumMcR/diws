import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { ReactComponent as Logo } from './../getBakingLogo.svg';

export default function PrintComponent(data) {
  let componentRef = useRef(data);
  const recipeData = JSON.stringify(data);
  localStorage.setItem("printData", recipeData)
  return (
    <>
      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button className="btn-lg border-0">Click here to print or save your recipe</Button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}



// component to be printed
class ComponentToPrint extends React.Component {
  state = {
    recipeData: [],
    listOfIngredients: [],
    listOfInstructions: [],
  }
  componentDidMount() {
    const data = localStorage.getItem("printData")
    if (data) {
      const parsedData = JSON.parse(data);
      this.setState({
        recipeData: parsedData.data
      })
      this.setState({ listOfIngredients: parsedData.data.recipesIngredients })
      this.setState({ listOfInstructions: parsedData.data.recipesSteps })




    }
  }





  render() {
    return (
      <div className="print">
        <div className="row" >

          <div className="col-3 pt-4">
            <div className="row">
              <div className="col-2">
              </div>


              <div className="col-8">


                <div className="row text-center rounded">
                  <Logo className="d-flex align-items-center text-center" style={{ height: "150%" }}></Logo>
                </div>



                <div className="pt-4">
                  <div className="row text-center rounded" style={{ backgroundColor: "#ffff80", height: "4rem" }}>
                    <div className="pt-1 fs-6 fw-light">
                      Servings
                    </div>
                    <div className="fs-5 fw-bold" style={{ color: "#ff80c4" }}>
                      {this.state.recipeData.recipesYield}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="row text-center rounded" style={{ backgroundColor: "#ffff80", height: "4rem" }}>
                    <div className="pt-1 fs-6 fw-light">
                      Prep Time
                    </div>
                    <div className="fs-5 fw-bold" style={{ color: "#ff80c4" }}>
                      {this.state.recipeData.recipesPrepTime}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="row text-center rounded" style={{ backgroundColor: "#ffff80", height: "4rem" }}>
                    <div className="pt-1 fs-6 fw-light">
                      Cook Time
                    </div>
                    <div className="fs-5 fw-bold" style={{ color: "#ff80c4" }}>
                      {this.state.recipeData.recipesCookTime}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="row text-center rounded" style={{ backgroundColor: "#ffff80", height: "4rem" }}>
                    <div className="pt-1 fs-6 fw-light">
                      Difficulty
                    </div>
                    <div className="fs-5 fw-bold" style={{ color: "#ff80c4" }}>
                      {this.state.recipeData.recipesDifficulty}
                    </div>
                  </div>
                </div>



              </div>


              <div className="col-2">
              </div>
            </div>
          </div>


          <div className="col-9 pt-4" style={{ paddingLeft: "0px" }}>
            <img className="border img-fluid w-100"
              src={this.state.recipeData.recipesImage}
              style={{
                height: "30rem",
                position: "center",
                objectFit: "cover",
              }}>
            </img>
          </div>



        </div>

        <div className="pt-3">
          <div className="container-fluid">
            <div className="container-fluid rounded text-center fs-1 fw-normal text-light d-flex align-items-center justify-content-center" style={{ backgroundColor: "#ff80c4", height: "5rem" }}>
              {this.state.recipeData.recipesName}
            </div>
          </div>
        </div>

        <div className="pt-3">
          <div className="container-fluid">
            <div className="row">


              <div className="col-7">

                <div className="fs-3 fw-bold text-center rounded-top py-2 " style={{ backgroundColor: "#ff80c4", color: "white" }}>
                  Instructions
                </div>

                <div className="container-fluid pt-2 text-dark fs-5 rounded-bottom">
                  {this.state.listOfInstructions.map((instruction, index) => (
                    <div key={index} className="py-2">
                      Step {index + 1}:
                      <div className="pt-1">
                        {instruction.step}
                      </div>
                    </div>

                  ))}
                </div>
              </div>

              <div className="col-5">

                <div className="fs-3 fw-bold text-center rounded-top py-2" style={{ backgroundColor: "#ff80c4", color: "white" }}>
                  Ingredients
                </div>

                <div className="container-fluid py-2 rounded-bottom text-dark fs-5">
                  {this.state.listOfIngredients.map((ingredient, index) => (
                    <div key={index}>
                      <ul>
                        <li>
                          {ingredient.ingredientName}
                        </li>
                      </ul>
                    </div>

                  ))}
                </div>


              </div>


            </div>
          </div>


        </div>


      </div >
    );
  }
}