import React from 'react';
const Form = props => ( 
    <form className="container-fluid" onSubmit={props.getRecipe}>
        <div className="input-group-addon align-items-center border row shadow-sm">
            <div className="col-9 input-group-addon" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <input className="form-control border-0" 
                type="text" 
                placeholder="Search for recipes..."
                id="recipeSearch"
                name="recipeSearch">

                </input>
            </div>
            <button
                className="col-3 input-group-addon border-start btn btn-outline-secondary bg-white border-0"
                >
                <i className="bi bi-search"></i>
            </button>

        </div>

    </form>




);

export default Form;