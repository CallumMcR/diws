import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (

        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark shadow-sm py-4"
                style={{ backgroundColor: "#ff80c4" }}>
                <div className="container-fluid justify-content-center">
                    <div className="px-3">
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navMenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand px-4">Get Baking!</a>
                    </div>
                    <div className="row align-middle">


                        <div className="col-8 collapse navbar-collapse">
                            <div className="align-middle h-100 d-flex align-items-center
                    justify-content-center">
                                <ul className="navbar-nav h-100 d-flex align-items-center">
                                    <li className="nav-item h-100 d-flex align-items-center px-2 fs-5">
                                        <NavLink style={{ color: "white" }} className="nav-link" to="/">
                                            HOME
                                        </NavLink>
                                    </li>

                                    <li className="nav-item h-100 d-flex align-items-center px-2 fs-5">
                                        <NavLink style={{ color: "white" }} className="nav-link" to="/about">
                                            ABOUT
                                        </NavLink>
                                    </li>

                                    <li className="nav-item h-100 d-flex align-items-center px-2 fs-5">
                                        <NavLink style={{ color: "white" }} className="nav-link" to="/recipes/">
                                            RECIPES
                                        </NavLink>
                                    </li>

                                    <li className="nav-item h-100 d-flex align-items-center px-2 fs-5">
                                        <NavLink style={{ color: "white" }} className="nav-link" to="/contact">
                                            CONTACT
                                        </NavLink>
                                    </li>
                                </ul>


                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="collapse navbar-collapse align-middle h-100 d-flex align-items-center justify-content-center">
                                <ul className="navbar-nav h-100 d-flex align-items-center">
                                    <li className="nav-item h-100 d-flex align-items-center">
                                        <NavLink to="www.google.com" className="btn" style={{ color: "white" }}>
                                            <span><i className="bi bi-facebook"></i></span>
                                        </NavLink>

                                        <NavLink to="www.google.com" className="btn" style={{ color: "white" }}>
                                            <span><i className="bi bi-twitter"></i></span>
                                        </NavLink>

                                        <NavLink to="www.google.com" className="btn" style={{ color: "white" }}>
                                            <span><i className="bi bi-pinterest"></i></span>
                                        </NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="text-dark collapse" id="navMenu" style={{ backgroundColor: "#ff80c4" }}>
                <hr style={{ marginTop: "0%", color: "whitesmoke", marginBottom: "0%" }}></hr>
                <div className="container-fluid d-lg-none justify-content-center">
                    <div className="row">
                        <NavLink to="/" className="btn px-5 col-3-lg text-center" style={{ color: "white" }}>
                            HOME
                        </NavLink>
                        <NavLink to="/about" className="btn px-5 col-3-lg" style={{ color: "white" }}>
                            ABOUT
                        </NavLink>
                        <NavLink to="/recipes/" className="btn px-5 col-3-lg" style={{ color: "white" }}>
                            RECIPES
                        </NavLink>
                        <NavLink to="/contact" className="btn px-5 col-3-lg" style={{ color: "white" }}>
                            CONTACT
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navigation;