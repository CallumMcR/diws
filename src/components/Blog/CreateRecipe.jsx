import React, { useState } from "react";
import { render } from "react-dom";
import { Link, useNavigate } from "react-router-dom";


function CreateRecipe() {
    const [recipeName, setRecipeName] = useState();
    const [recipeYield, setRecipeYield] = useState();
    let navigate = useNavigate();
    async function getData(data) {
        data.preventDefault(); // Stops the page from refreshing and losing the data
        setRecipeYield(data.target.elements.recipeYield.value);
        setRecipeName(data.target.elements.recipeName.value);
        navigate('/recipes/recipe/print/',
            { state:{recipeName} }
            )
    }

    return (
        <div style={{ overflow: "hidden" }}>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6 text-center">
                    <div className="pt-5">
                        <div className="fw-bold fs-2" style={{ color: "midnightblue" }}>
                            Create a recipe
                        </div>
                        <hr />

                    </div>




                    <form className="pt-3 container-fluid" onSubmit={getData}>

                        <div className="pt-3">
                            <input placeholder="Recipe Name" style={{ borderColor: "#ff80c4" }} className="form-control" name="recipeName" id="recipeName" type="text" />

                        </div>


                        <div className="pt-3">
                            <input placeholder="Recipe Yield" style={{ borderColor: "#ff80c4" }} type="text" className="form-control" name="recipeYield" id="recipeYield" />
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
            </div>
        </div>
    );
}


export default CreateRecipe;

