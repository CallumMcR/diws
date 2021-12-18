import React from "react";
import { ReactComponent as Logo } from './getBakingLogo.svg';

function Home() {
    return (
        <div className="home">
            <div className="container-fluid p-5 " style={{ backgroundColor: "white" }}>
                <div className="container-fluid p-5 border" style={{
                    backgroundColor: "whitesmoke"
                    , borderRadius: "15px"
                }}>
                    
                    <div className="d-sm-flex row">
                        <div className="col-lg-9 p-2">
                            <div className="px-5">
                                <h1 className="pb-3">Who is Get Baking?</h1>
                                <p1 className="fs-5 text-center">
                                    We are a small group of people who have a passion and love for food,
                                    with my grandparents originally founding a little baking store with the name of Get Baking, I then
                                    took it over and have recently decided to move to an online platform where I can spread the love of my
                                    food, as well as allow everyone, and anyone to taste and experience
                                    the delightful recipes my grandparents managed to develop, as well as share our families recipes that have
                                    been exclusive to this family for generations!
                                </p1>
                                <div className="row d-flex fs-5 py-5">
                                    Get Baking strives to provide you with a unique taste in your mouth that you will find no where else!
                                    Ranging from seasonal recipes to our families very own traditional recipes, originating from our roots
                                    all the way back in the year of 1547 when our family began baking! With a plethora of experience under our
                                    hands, we aim to bring you the best recipes we have generated over years of experience, giving you
                                    the best family di...
                                </div>
                                <button type="submit" className="btn btn-dark" style={{ color: "white" }}>
                                    READ MORE
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-3 border rounded p-2 text-center" style={{ backgroundColor: "#ffff80" }}>
                            
                            <Logo className="img-fluid"style={{width:"60%"}}/>
                            
                            <h1>Why get Baking?</h1>
                            <p1 className="fs-5 text-center">
                                Founded in 1985 by my grandparents, then taken over by me in 2005, I decided to
                                continue to spread
                                their love of food, reaching further out, allowing for the world to taste and experience their amazing
                                recipes!
                            </p1>

                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center">

            </div>
            <div className="container-fluid p-5">
                <div className="d-flex row border p-5" style={{
                    backgroundColor: "white",
                    borderRadius: "15px"
                }}>
                    <h1 className="pb-5">
                        Recent recipes
                    </h1>

                    <div className="col-lg-3 align-items-center justify-content-center d-flex">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="cake.jpg" className="card-img-top img-fluid" alt="..."></img>
                            <div className="card-body">
                                <hr></hr>
                                <h5 className="card-title text-dark">Recipe name</h5>
                                <hr></hr>
                                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a className="btn btn-primary">Read more</a>
                                <div className="py-3">
                                    Author: Callum McRoyall
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 align-items-center justify-content-center d-flex">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="cake.jpg" className="card-img-top img-fluid" alt="..."></img>
                            <div className="card-body">
                                <hr></hr>
                                <h5 className="card-title text-dark">Recipe name</h5>
                                <hr></hr>
                                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a className="btn btn-primary">Read more</a>
                                <div className="py-3">
                                    Author: Callum McRoyall
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 align-items-center justify-content-center d-flex">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="cake.jpg" className="card-img-top img-fluid" alt="..."></img>
                            <div className="card-body">
                                <hr></hr>
                                <h5 className="card-title text-dark">Recipe name</h5>
                                <hr></hr>
                                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a className="btn btn-primary">Read more</a>
                                <div className="py-3">
                                    Author: Callum McRoyall
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 align-items-center justify-content-center d-flex">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="cake.jpg" className="card-img-top img-fluid" alt="..."></img>
                            <div className="card-body">
                                <hr></hr>
                                <h5 className="card-title text-dark">Recipe name</h5>
                                <hr></hr>
                                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                                <a className="btn btn-primary">Read more</a>
                                <div className="py-3">
                                    Author: Callum McRoyall
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;