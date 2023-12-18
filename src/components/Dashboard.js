import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import laptop from "../Image/man-with-laptop-light.png";
import projectphoto from "../Image/project-photo.png";
import Flutter from "../Image/Flutter.png";
import Java from "../Image/Java.png";
import PHP from "../Image/PHP.png";
import Net from "../Image/Net.png";
import Piechart from "./Piechart";
import Cookies from "js-cookie";
import config from "./config";

const Dashboard = () => {
  const {baseURL} = config;

  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve userId from cookie when the component mounts
    const userIdFromCookie = Cookies.get("userId");
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
    } else {
      // Redirect to the home page if userId is not found in cookies
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      {<Sidebar />}
      <div className="asside">
        <div className="about-first">
          <div className="">
            <div className="row">
              <div className="col-6 mb-24">
                <div className="bg-box">
                  <div className="welcome-section">
                    <div className="welcome-text">
                      <h5>Welcome to Quick Maker 🎉</h5>
                      <p>Make your Quotation easy and accurate! </p>
                      {/* <div>Based URL :- {baseURL}</div> */}
                      <p>User id is :- {userId}</p>
                      <Link
                        type="button"
                        to={"#"}
                        className="btn btn-wlcmupgrade"
                      >
                        Upgrade to Pro
                      </Link>
                    </div>
                    <div className="welcome-img">
                      <img src={laptop} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 mb-24">
                <div className="bg-box">
                  <div className="technology">
                    <div className="add-tech-box">
                      <button
                        type="button"
                        className="btn add-tech"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModaltechnology"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="add-technology">
                      <p>
                        Add Technology{" "}
                        <span className="add-tech-text">(10)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Add Technology --> */}
              <div
                className="modal fade"
                id="exampleModaltechnology"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add Technology
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="user-details">
                        <form>
                          <div className="form-floating mb-4 mt-2">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label for="floatingInput">Technology</label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label for="floatingInput">Per Hours Rate</label>
                          </div>
                          <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                            <button
                              className="btn btn-upload"
                              data-bs-dismiss="modal"
                            >
                              Save changes
                            </button>
                            <button
                              className="btn btn-reset me-0"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--End Add Technology --> */}
              <div className="col-2 mb-24">
                <div className="bg-box">
                  <div className="technology">
                    <div className="add-tech-box">
                      <button
                        type="button"
                        className="btn add-mod"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalmodule"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <div className="add-technology">
                      <p>
                        Add Module <span className="add-mod-text">(10)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Add Module --> */}
              <div
                className="modal fade"
                id="exampleModalmodule"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Add Module
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="user-details">
                        <form>
                          <div className="form-floating mb-4 mt-2">
                            <select
                              className="form-select form-control"
                              id="floatingSelectGrid"
                              aria-label="Floating label select example"
                            >
                              <option selected>Select Technology</option>
                              <option value="1">Select Technology</option>
                              <option value="2">Select Technology</option>
                              <option value="3">Select Technology</option>
                            </select>
                            <label for="floatingSelectGrid">
                              Select Technology
                            </label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label for="floatingInput">Module</label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="number"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label for="floatingInput">No of hours</label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="number"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label for="floatingInput">Prize</label>
                          </div>
                          <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                            <button
                              className="btn btn-upload"
                              data-bs-dismiss="modal"
                            >
                              Save changes
                            </button>
                            <button
                              className="btn btn-reset me-0"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--End Add Module --> */}
              <div className="col-2 mb-24">
                <div className="bg-box">
                  <div className="technology">
                    <div className="add-tech-box">
                      <Link
                        to={"/CreateProject"}
                        type="button"
                        className="btn add-pro"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </Link>
                    </div>
                    <div className="add-technology">
                      <p>
                        Create Project{" "}
                        <span className="add-pro-text">(10)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="all-project-table">
                    <Link to={"#"}>
                      <div className="project-one active">
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
        </div>
        {<Footer />}
      </div>
    </div>
  );
};

export default Dashboard;
