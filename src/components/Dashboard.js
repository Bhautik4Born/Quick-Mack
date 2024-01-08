import React, { useEffect, useState, map } from "react";
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
  const { baseURL } = config;
  const [userId, setUserId] = useState("");
  const history = useNavigate();

  useEffect(() => {
    const userIdFromCookie = Cookies.get("userId");
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
    } else {
      history.push("/");
    }
  }, [history]);

  const [technology, setTechnology] = useState("");
  const [hours, setHours] = useState("");
  const [responseMessageTech, setResponseMessageTech] = useState("");

  const handleTechSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}api/AddTechnology/technology`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          technology: technology,
          hours: parseInt(hours),
        }),
      });

      const response1 = await response.json();
      setResponseMessageModule(response1.message);

      if (response1.message === "Data stored successfully!") {
        alert("Add Technology Successfully..!");
        window.location.href = "/Dashboard";
        history.push("/Dashboard");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      setResponseMessageTech(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [technologyId, setSelectedTechnology] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [hoursNumber, setHoursNumber] = useState("");
  const [prize, setPrize] = useState("");
  const [responseMessageModule, setResponseMessageModule] = useState("");
  // const [technologyId, setSelectedTechnology] = useState("");

  const handleSelectChange = (event) => {
    setSelectedTechnology(event.target.value);
  };
  const [technologies, setTechnologies] = useState([]);

  const handleModuleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userId = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      const response = await fetch(`${baseURL}api/AddModule/module`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          user_id: userId,
          technology_id: technologyId,
          module: moduleName,
          hours_number: parseInt(hoursNumber),
          prize: parseInt(prize),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      setResponseMessageModule(data.message);

      if (data.message === "Data stored successfully!") {
        alert("Add Module Successfully..!");
        window.location.href = "/Dashboard";
        history.push("/Dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = document.cookie.replace(
          /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        const response = await fetch(
          `${baseURL}api/showtotalRecoder/checkUserId`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userId,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setTechnologies(data.data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchData();
  }, []);
//count 

const [totalTotalRecord, setTotalTotalRecord] = useState(0);
const [moduleTotalRecord, setModuleTotalRecord] = useState(0);
const [projectTotalRecord, setProjectTotalRecord] = useState(0);

useEffect(() => {
  const fetchData = async () => {
    try {
      const user_Id = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      const userId = user_Id; // Replace with your user ID retrieval logic

      const response = await fetch(`${baseURL}api/showtotalRecoder/checkUserId`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();
      if (responseData && responseData.Counttechnology) {
        setTotalTotalRecord(responseData.Counttechnology);
      }
      if (responseData && responseData.Module) {
        setModuleTotalRecord(responseData.Module);
      }
      if (responseData && responseData.Project) {
        setProjectTotalRecord(responseData.Project);
      }
      
      // Assuming you want to set state for different keys in the same response object
      // Adjust the conditionals based on the structure of your response data

      if (responseData && responseData.data) {
        setTechnologies(responseData.data);
      } 
      // Assuming CountModule and CountProject are also in different parts of the response
      // Set the respective state variables accordingly based on your response structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);



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
                        Add Technology{""}<br></br>
                        <span className="add-tech-text"> ( {totalTotalRecord} )</span>
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
                        <form onSubmit={handleTechSubmit}>
                          <div className="form-floating mb-4 mt-2">
                            <input
                              type="text"
                              className="form-control"
                              id="technologyInput"
                              placeholder="Technology"
                              value={technology}
                              onChange={(e) => setTechnology(e.target.value)}
                              required
                            />
                            <label htmlFor="technologyInput">Technology</label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="text"
                              className="form-control"
                              id="hoursInput"
                              placeholder="Per Hours Rate"
                              value={hours}
                              name="hours"
                              onChange={(e) => setHours(e.target.value)}
                              required
                            />
                            <label htmlFor="hoursInput">Per Hours Rate</label>
                          </div>
                          <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                            <button className="btn btn-upload" type="submit">
                              Save changes
                            </button>
                            <button
                              className="btn btn-reset me-0"
                              type="button"
                            >
                              Cancel
                            </button>
                          </div>

                          {/* Display response message */}
                          {/* {responseMessageTech && <p>{responseMessageTech}</p>} */}
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
                        Add Module<br></br> <span className="add-mod-text">( {moduleTotalRecord} )</span>
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
                        <form onSubmit={handleModuleSubmit}>
                          <div className="form-floating mb-4 mt-2">
                            <select
                              className="form-select form-control"
                              id="floatingSelectGrid"
                              aria-label="Floating label select example"
                              name="technology"
                              value={technologyId}
                              onChange={handleSelectChange}
                            >
                              <option value="">Select Technology</option>
                              {Array.isArray(technologies) &&
                                technologies.length > 0 ? (
                                technologies.map((tech) => (
                                  <option key={tech.id} value={tech.id}>
                                    {tech.technology}
                                  </option>
                                ))
                              ) : (
                                <option value="" disabled>
                                  No Module Available
                                </option>
                              )}
                            </select>

                            <label htmlFor="floatingSelectGrid">
                              Select Technology
                            </label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="text"
                              className="form-control"
                              id="moduleNameInput"
                              placeholder="Module"
                              value={moduleName}
                              onChange={(e) => setModuleName(e.target.value)}
                              required
                            />
                            <label htmlFor="moduleNameInput">Module</label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="number"
                              className="form-control"
                              id="hoursInput"
                              placeholder="No of hours"
                              value={hoursNumber}
                              onChange={(e) => setHoursNumber(e.target.value)}
                              required
                            />
                            <label htmlFor="hoursInput">No of hours</label>
                          </div>
                          <div className="form-floating mb-4">
                            <input
                              type="number"
                              className="form-control"
                              id="prizeInput"
                              placeholder="Prize"
                              value={prize}
                              onChange={(e) => setPrize(e.target.value)}
                              required
                            />
                            <label htmlFor="prizeInput">Prize</label>
                          </div>
                          <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                            <button className="btn btn-upload" type="submit">
                              Save changes
                            </button>
                            <button
                              className="btn btn-reset me-0"
                              type="button"
                            >
                              Cancel
                            </button>
                          </div>

                          {/* Display response message */}
                          {responseMessageModule && (
                            <p>{responseMessageModule}</p>
                          )}
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
                        Create Project{' '}
                        <span className="add-pro-text"><br/>( {projectTotalRecord} )</span>
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
                        required
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
