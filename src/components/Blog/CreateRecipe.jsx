import React, { useState } from "react";
import { render } from "react-dom";
import { Link, useNavigate } from "react-router-dom";


function CreateRecipe() {

    let navigate = useNavigate();
    const [ingredients, setIngredients] = useState();
    const [steps, setSteps] = useState();
    const [description, setDescription] = useState();
    const [backgroundImage, setBackgroundImage] = useState(`https://i.gyazo.com/855e8ca01684f0d61e302ba09a177bfd.png`);


    function getData(data) {
        console.log(data);
        data.preventDefault(); // Stops the page from refreshing and losing the data
        navigate('/recipes/recipe/print/',
            {
                state: {
                    recipesName: data.target.elements.recipeName.value,
                    recipesYield: data.target.elements.recipeYield.value,
                    recipesIngredients: ingredients,
                    recipesSteps: steps
                }
            }
        )
    }

    return (
        <div style={{ overflow: "hidden" }}>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6 text-center">





                    <div className="pt-5">
                        <div className="fw-bold fs-2 py-3 rounded-top" style={{ color: "white", backgroundColor: "#ff80c4" }}>
                            Create a recipe
                        </div>
                    </div>




                    <form className="pt-3 container-fluid border" onSubmit={getData}>

                        <div className="pt-3 border"
                            style={{
                                height: "24rem", backgroundImage: `url(${backgroundImage})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}>


                        </div>



                        <div className="pt-3">
                            <input placeholder="Recipe Name" style={{ borderColor: "#ff80c4" }} className="form-control" name="recipeName" id="recipeName" type="text" />

                        </div>


                        <div className="pt-3">
                            <input placeholder="Recipe Yield" style={{ borderColor: "#ff80c4" }} type="text" className="form-control" name="recipeYield" id="recipeYield" />
                        </div>

                        <div className="pt-3 row">
                            <div className="col-4">
                                <input placeholder="Preparation Time" style={{ borderColor: "#ff80c4" }} type="text" className="form-control" name="recipePrepTime" id="recipePrepTime" />
                            </div>

                            <div className="col-4">
                                <input placeholder="Cook Time" style={{ borderColor: "#ff80c4" }} type="text" className="form-control" name="recipeCookTime" id="recipeCookTime" />
                            </div>
                            <div className="col-4">
                                <input placeholder="Difficulty" style={{ borderColor: "#ff80c4" }} type="text" className="form-control" name="recipeDifficulty" id="recipeDifficulty" />
                            </div>
                        </div>


                        <div className="pt-3">
                            <textarea placeholder="Please describe your recipe..."
                                style={{ borderColor: "#ff80c4" }} type="text" className="form-control"
                                name='recipeDescription' id="recipeDescription" rows="12"
                                onChange={(e) => { setDescription(e.target.value); }}>
                            </textarea>
                        </div>

                        <div className="pt-3">
                            <textarea placeholder="Please list your ingredients here..."
                                style={{ borderColor: "#ff80c4" }} type="text" className="form-control"
                                name='recipeIngredients' id="recipeIngredients" rows="12"
                                onChange={(e) => { setIngredients(e.target.value); }}>
                            </textarea>
                        </div>



                        <div className="pt-3">
                            <textarea placeholder="Please enter your recipes steps/instructions here..."
                                style={{ borderColor: "#ff80c4" }} type="text" className="form-control"
                                name='recipeInstructions' id="recipeInstructions" rows="12"
                                onChange={(e) => { setSteps(e.target.value); }}>
                            </textarea>
                        </div>





                        <div className="py-5">
                            <button className="btn-lg col-6 btn btn-primary rounded-pill text-center">
                                Create Recipe
                            </button>

                        </div>
                    </form>




                </div>
                <div className="col-3">

                </div>
            </div >
        </div >
    );
}


export default CreateRecipe;

