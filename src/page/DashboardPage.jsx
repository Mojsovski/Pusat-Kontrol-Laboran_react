import React from "react";
import HeroImg from "../assets/hero.png";
import Header from "../component/Header";
import PopUp from "../component/PopUp";

function LandingPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-md-10">
            <div className="dashboard">
              <div className="row">
                <div className="row ">
                  <div className="col-md-5">
                    <div
                      className="card"
                      style={{ width: "450px", height: "300px" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div
                      className="card"
                      style={{ width: "695px", height: "300px" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{ width: "350px", height: "300px" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{ width: "350px", height: "300px" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{ width: "395px", height: "300px" }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
