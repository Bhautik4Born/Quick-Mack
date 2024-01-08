import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import projectphoto from "../Image/project-photo.png";
import Flutter from "../Image/Flutter.png";
import Java from "../Image/Java.png";
import PHP from "../Image/PHP.png";
import Net from "../Image/Net.png";
import Piechart from "./Piechart";

const Project = () => {
  return (
    <div>
      {<Sidebar />}
      <div className="asside">
        <div className="about-first">
          <div className="row">
            <div className="col-4 mb-24">
              <div className="bg-box-new">
                <div className="pro-add-new">
                  <h4>Project</h4>
                  <Link
                    to={"/CreateProject"}
                    type="button"
                    className="btn add-new"
                  >
                    <i className="fa-solid fa-plus"></i> Add New
                  </Link>
                </div>
                <div className="search-project">
                  <div className="form-floating small-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Search Project</label>
                  </div>
                </div>
                <div className="all-project-table all-project-plus">
                  <Link to={"#"}>
                    <div className="pr oject-one active">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                  <Link to={"#"}>
                    <div className="project-one">
                      <div className="project-photo-discription">
                        <img src={projectphoto} alt="" />
                        <div className="pro-title-disc">
                          <p>Native Android</p>
                          <h5>NEWS Video Maker</h5>
                        </div>
                      </div>
                      <div className="price-hours d-flex">
                        <h3>$82.6</h3>
                        <h4>30h</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-8 mb-24">
              <div className="bg-box h-auto">
                <div className="project-one bg-transparent mt-0 py-0 mb-3 px-0">
                  <div className="project-photo-discription">
                    <div className="pro-title-disc">
                      <p>Clint Name</p>
                      <h5>NEWS Video Maker</h5>
                    </div>
                  </div>
                  <div className="edit-delete">
                    <Link className="btn client-edit me-2">Edit</Link>
                    <Link className="btn client-delete">Delete</Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <Piechart />
                    <div className="quotation-amt">
                      <h3>$ 8,258</h3>
                      <p>Quotation Amount</p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={Flutter} alt="" />
                            <div className="pro-title-disc">
                              <h5>Flutter</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={Java} alt="" />
                            <div className="pro-title-disc">
                              <h5>Java</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={PHP} alt="" />
                            <div className="pro-title-disc">
                              <h5>PHP</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={Net} alt="" />
                            <div className="pro-title-disc">
                              <h5>.NET</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={Flutter} alt="" />
                            <div className="pro-title-disc">
                              <h5>Flutter</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={Java} alt="" />
                            <div className="pro-title-disc">
                              <h5>Java</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={PHP} alt="" />
                            <div className="pro-title-disc">
                              <h5>PHP</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                      <Link to={"#"}>
                        <div className="project-one">
                          <div className="project-photo-discription">
                            <img src={Net} alt="" />
                            <div className="pro-title-disc">
                              <h5>.NET</h5>
                              <p className="mb-0">10 Hours</p>
                            </div>
                          </div>
                          <div className="price-hours d-flex">
                            <h3>$82.6</h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <Link to={"#"} type="submit" className="btn btn-pro">
                      View quotation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {<Footer />}
      </div>
    </div>
  );
};

export default Project;
