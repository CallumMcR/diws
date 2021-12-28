import React, { useRef } from 'react';
import { render } from "react-dom";
import { useReactToPrint } from 'react-to-print';
import { useLocation } from "react-router-dom";
import PrintComponent from "./PrintComponent.js";
import { Carousel } from "react-bootstrap";
import moment from "moment";



function PrintRecipe(props) {

    const location = useLocation();
    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div>
            {console.log(location.state)}
            <PrintComponent

                data={location.state} />
            <div className="text-dark p-5 text-center" style={{ backgroundColor: "white" }}>
                <div className="container-fluid row d-flex">

                    <div className="align-items-center rounded py-3" style={{ backgroundColour: "white" }}>
                        <h1>
                            {location.state.recipesName}
                        </h1>
                    </div>


                    <hr style={{ marginbottom: "0px" }} />

                </div>

                <div className="container-fluid">


                    <div className="col-lg-8 align-items-center rounded py-3 mx-auto" style={{ backgroundColour: "white" }}>


                        <div className="py-3 container-fluid justify-content-center align-items-center d-flex"
                            style={{ backgroundColour: "white" }}>

                            <div className="container-fluid">

                                <div className="pt-3 border"
                                    style={{
                                        height: "24rem", backgroundImage: `url(${location.state.recipesImage})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        position: "relative"
                                    }}>
                                </div>



                                <div className="py-3">

                                </div>

                                <div className="container-fluid border rounded-top" style={{ backgroundColor: "#ff80c4", color: "white" }}>

                                    <h1 className="py-3 fw-normal">About Recipe</h1>

                                </div>

                                <div className="container-fluid border text-center border-top-0 rounded-bottom">

                                    <div className="row pt-2 fs-5 text-center">
                                        <div className="col-4">
                                            Preperation Time: {location.state.recipesPrepTime}
                                        </div>
                                        <div className="col-4 fw-bold">
                                            Difficulty: {location.state.recipesDifficulty}
                                        </div>
                                        <div className="col-4">
                                            Cook Time: {location.state.recipesCookTime}
                                        </div>
                                    </div>

                                    <div className="pt-4 fs-5 text-center">
                                        Yields: {location.state.recipesYield}
                                    </div>
                                    <hr />
                                    <div className="text-center fs-5 pt-2 pb-4 fw-bold text-decoration-underline">
                                        Description
                                    </div>
                                    <p className="container-fluid pb-4 fs-5 text-center">
                                        {location.state.recipesDescription}
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
                                    
                                                <tr>
                                                    <th>{location.state.recipesNutrition[0].measurementValue}</th>
                                                    <th>{location.state.recipesNutrition[1].measurementValue}</th>
                                                    <th>{location.state.recipesNutrition[2].measurementValue+location.state.recipesNutrition[2].units}</th>
                                                    <th>{location.state.recipesNutrition[3].measurementValue+location.state.recipesNutrition[3].units}</th>
                                                    <th>{location.state.recipesNutrition[4].measurementValue+location.state.recipesNutrition[4].units}</th>
                                                    <th>{location.state.recipesNutrition[5].measurementValue+location.state.recipesNutrition[5].units}</th>
                                                    <th>{location.state.recipesNutrition[6].measurementValue+location.state.recipesNutrition[6].units}</th>
                                                    <th>{location.state.recipesNutrition[7].measurementValue+location.state.recipesNutrition[7].units}</th>
                                                    <th>{location.state.recipesNutrition[8].measurementValue+location.state.recipesNutrition[8].units}</th>
                                                </tr>

                                       

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

                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {location.state.recipesIngredients.map((ingredient, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {Capitalize(ingredient.ingredientName) == true ? `${Capitalize(ingredient.ingredientName)}` :
                                                                            `${Capitalize(ingredient.ingredientName)}`}

                                                                    </td>
                                                                    <td>
                                                                        {ingredient.measurementValue+ingredient.units}
                                                                    </td>
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

                                                    {location.state.recipesSteps.map((step, index) => (

                                                        <div key={index + step.step}>
                                                            <li key={index} className='fw-bold fs-4 text-start pt-5'>
                                                                Step {index + 1}:
                                                            </li>
                                                            <div key={step.step} className='fw-normal fs-6 text-start'>
                                                                {step.step}
                                                            </div>
                                                        </div>


                                                    ))}



                                                    <div className="py-3">

                                                    </div>
                         
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PrintRecipe 