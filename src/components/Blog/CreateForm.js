import React from 'react';
import { useNavigate } from 'react-router-dom';
const CreateForm = props => (
    <form className="pt-3 container-fluid" onSubmit={(props.getData)}>

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




);

export default CreateForm;