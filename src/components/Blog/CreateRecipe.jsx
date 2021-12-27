import React, { useState } from "react";
import { render } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";


function CreateRecipe() {

    let navigate = useNavigate();
    const [ingredients, setIngredients] = useState([
        { ingredientName: "", measurementValue: "", units: "", prevUnits: "g" },
    ]);
    const [steps, setSteps] = useState();
    const [description, setDescription] = useState();
    const [backgroundImage, setBackgroundImage] = useState(`https://i.gyazo.com/855e8ca01684f0d61e302ba09a177bfd.png`);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const handleChangeInput = (index, event) => {
        const values = [...ingredients];
        values[index][event.target.name] = event.target.value;
        setIngredients(values);
    }

    const handleAddFields = () => {
        setIngredients([...ingredients,
        { ingredientName: "", measurementValue: "", units: "", prevUnits: "g" }])
    }

    const handleRemoveFields = (index) => {
        const values = [...ingredients];
        if (values.length > 1) {
            values.splice(index, 1);
            setIngredients(values);
        }


    }

    function validateURL(url) {
        const img = new Image();

        img.src = url;

        if (img.complete) {
            setBackgroundImage(url);
        } else {
            img.onload = () => {
                setBackgroundImage(url);
            };

            img.onerror = () => {
                setBackgroundImage(`https://i.gyazo.com/855e8ca01684f0d61e302ba09a177bfd.png`);
            };
        }
    }
    function closeModal(event) {
        setBackgroundImage(`https://i.gyazo.com/855e8ca01684f0d61e302ba09a177bfd.png`);
        setShow(false);
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
                                backgroundSize: "cover",
                                position: "relative"
                            }}>
                            <Button className="btn btn-primary btn-lg text-start"
                                onClick={handleShow}
                                style={{
                                    position: "absolute", top: "50%",
                                    transform: "translate(0,-50%)", color: "white",
                                    opacity: "0.8"
                                }}>
                                <span className="bi bi-upload" style={{ color: "white", }}>

                                </span>

                            </Button>
                            <Modal show={show} onHide={handleClose} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Recipe Image</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="text-center pb-3">Please use any image with a valid URL. Recommended websites
                                        to upload your images are as follows: Gyazo, Imgur
                                    </div>
                                    <InputGroup>
                                        <InputGroup.Text name="recipesURL"
                                        >URL
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Please enter an image URL"
                                            id="recipesURL"
                                            name="recipesURL"
                                            onChange={(e) => validateURL(e.target.value)}
                                        >
                                        </FormControl>
                                    </InputGroup>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => closeModal()}>
                                        Default Image
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>

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
                                <input placeholder="Cook Time" style={{ borderColor: "#ff80c4" }}
                                    type="text" className="form-control" name="recipeCookTime"
                                    id="recipeCookTime" />
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

                            {ingredients.map((ingredient, index) => (
                                <div className="row align-items-center d-flex" key={index}>

                                    <div className="col-3">


                                        <input type="text"
                                            className="form-control"
                                            name="ingredientName" label="Ingredient Name"
                                            placeholder="ingredient"
                                            value={ingredient.ingredientName}
                                            style={{ borderColor: "#ff80c4" }}
                                            onChange={(event) => handleChangeInput(index, event)}>
                                        </input>


                                    </div>
                                    <div className="col-3">
                                        <input type="text"
                                            name="measurementValue" label="measurementValue"
                                            placeholder="measurement"
                                            value={ingredient.measurementValue}
                                            onChange={(event) => handleChangeInput(index, event)} />
                                    </div>

                                    <div className="col-3">
                                        <input type="text"
                                            name="units" label="units"
                                            placeholder="measurement unit"
                                            value={ingredient.units}
                                            onChange={(event) => handleChangeInput(index, event)} />
                                    </div>



                                    <div className="col-3">

                                        <div className="row">

                                            <div className="col-6">
                                                <Button className="bi bi-dash 
                                                rounded-circle"
                                                    variant="primary"
                                                    onClick={() => handleRemoveFields(index)}>
                                                </Button>
                                            </div>

                                            <div className="col-6">
                                                <Button className="bi bi-plus-lg
                                                
                                                rounded-circle"variant="primary"
                                                    onClick={() => handleAddFields()}>

                                                </Button>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            ))}


                        </div>
























                        <div className="pt-3">
                            <textarea placeholder="Please enter your recipes steps/instructions here..."
                                style={{ borderColor: "#ff80c4" }} type="text" className="form-control"
                                name='recipeInstructions' id="recipeInstructions" rows="12"
                                onChange={(e) => { setSteps(e.target.value); }}>
                            </textarea>
                        </div>



                        <div className="pt-3 row">
                            <div className="col-6">
                                <input placeholder="Fat"
                                    style={{ borderColor: "#ff80c4" }} type="text"
                                    className="form-control" name="recipesFat"
                                    id="recipesFat"
                                    value="" />
                            </div>

                            <div className="col-6">
                                <Form.Select aria-label="Measurements"
                                >
                                    <option value="mg">Milligrams</option>
                                    <option value="g">Grams</option>
                                    <option value="kg">Kilograms</option>
                                    <option value="oz">Ounces</option>
                                    <option value="ml">Milliliters</option>
                                    <option value="l">Liters</option>
                                    <option value="cups">Cups of</option>
                                    <option value="teaspoons">Teaspoons</option>
                                </Form.Select>


                            </div>
                        </div>






                        <div className="py-5">
                            <Button
                                className="btn-lg col-6 btn btn-primary rounded-pill text-center"
                                type="submit">
                                Create Recipe
                            </Button>

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

