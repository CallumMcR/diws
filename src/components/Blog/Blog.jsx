
import React from "react";
import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div className="home">
      <div class="text-dark p-5 text-center" style={{ backgroundColor: "whitesmoke" }}>
        <div className="container-fluid d-flex-row rounded" style={{ backgroundColor: "white" }}>
          <div className="row py-3">
            <div className="col-3">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                  <button className="text-center fw-normal fs-5 form-control" type="button">
                    Add recipe
                  </button>
                </div>
                <div className="col-4">

                </div>
              </div>
            </div>

            <div className="col-6">
              <form className="container-fluid">
                <div className="input-group-addon align-items-center border row shadow-sm">
                  <div className="col-9 input-group-addon" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                    <input className="form-control border-0" type="search" placeholder="Search for recipes..."
                      id="example-search-input">

                    </input>
                  </div>
                  <button
                    className="col-3 input-group-addon border-start btn btn-outline-secondary bg-white border-0"
                    type="button">
                    <i class="bi bi-search"></i>
                  </button>

                </div>

              </form>

            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                  <div className="dropdown container-fluid">
                    <button className="form-control dropdown-toggle rounded-0 shadow-sm" type="button"
                      id="recipeFiltrationButton" data-bs-toggle="dropdown" aria-expanded="false">
                      Filter
                    </button>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="recipeFiltrationButton">
                      <li><a className="dropdown-item">Most popular</a></li>
                      <li><a className="dropdown-item">Most recent</a></li>
                      <li><a className="dropdown-item">Christmas Recipes</a></li>
                      <li><a className="dropdown-item">Easter Recipes</a></li>
                      <li><a className="dropdown-item">Halloween Recipes</a></li>

                    </ul>
                  </div>
                </div>
                <div className="col-3">

                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-2">

            </div>
            <div className="col-8">
              <div className="row py-3">
                <div className="col-4 d-flex">
                  <button className="card btn btn-primary mx-auto"
                  style={{width:"18rem","backgroundImage" :`url(https://i.gyazo.com/de55784f14242dce6fec456af799be1f.jpg)`,
                backgroundSize: "cover"}}>
                    <div className="py-5"></div>
                    <div className="py-5"></div>
                    <div className="card-body align-middle container-fluid rounded"
                    style={{backgroundColor:"white",opacity:"0.9"}}>

                      <div className="row">
                        <div className="col-8">
                          <h5 className="card-title text-start" style={{color:"#ff80c4"}}>Chocolate cake
                          </h5>
                        </div>
                        <div className="col-4">
                          <span className="text-end text-dark" style={{fontSize:"80%"}}>4hrs <i
                            className="bi bi-alarm"></i></span>
                        </div>
                      </div>
                      <div className="card-text text-dark fs-6 fw-light text-start">

                        <div className="pt-1" style={{fontSize:"75%"}}>
                          Cocoa powder, flour, whipped cream, eggs, chocolate sauce
                        </div>

                        <div className="row align-items-center pt-1">

                          <div className="col-8">
                            <i className="bi bi-star" style={{color:"orange"}}></i>
                            <i className="bi bi-star" style={{color:"orange"}}></i>
                            <i className="bi bi-star" style={{color:"orange"}}></i>
                            <i className="bi bi-star" style={{color:"orange"}}></i>
                            <i className="bi bi-star" style={{color:"orange"}}></i>
                            (389)
                          </div>
                          <div className="col-4 text-end">
                            Author
                          </div>
                        </div>



                      </div>


                    </div>
                  </button>

                </div>
                <div className="col-4 d-flex">

                </div>
                <div className="col-4 d-flex">

                </div>
              </div>
            </div>
            <div className="col-2">

            </div>
          </div>
        </div>
        <div className="col-2">

        </div>
      </div>
    </div>
  );
}

export default Blog;