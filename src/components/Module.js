import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import config from "./config";

const Module = () => {
  const { baseURL } = config;
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [hoursNumber, setHoursNumber] = useState("");
  const [prize, setPrize] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const userId = document.cookie.replace(
          /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        const response = await fetch(
          `${baseURL}api/UserTechnologies/getUserTechnologies`,
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

    fetchTechnologies();
  }, []);

  const handleSelectChange = (event) => {
    event.preventDefault();
    setSelectedTechnology(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userId_2 = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      const response = await fetch(`${baseURL}api/AddModule/module`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId_2,
          technology_id: selectedTechnology,
          module: moduleName,
          hours_number: parseInt(hoursNumber),
          prize: parseInt(prize),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      if (data.message === "Data stored successfully!") {
        // Notify the user about successful module addition
        alert("Module added successfully!");
        window.location.href = "/Module"; // Redirect to Technology page
      } else {
        // Notify the user about other responses (not a successful addition)
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      // Notify about any error occurred during the process
      console.error("Error:", error);
      alert("An error occurred while adding the module. Please try again later.");
    }

  };

  const [userModules, setUserModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user_Id = document.cookie.replace(
          /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        const userId = user_Id; // Replace with your user ID retrieval logic

        const response = await fetch(`${baseURL}api/UserModle/getUserModule`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        if (data && data.data) {
          setTechnologies(data.data);
        }

        setUserModules(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      finally {
        // Move setIsLoading(false) inside the 'if' block after setting the data
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [deleteResponse, setDeleteResponse] = useState(null);

  //delete the recod alrt

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseURL}api/DeleteModule/deleteModule`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ module_id: id }),
      });

      if (response.ok) {
        const data = await response.json();
        setDeleteResponse(data); // Store API response for display or further use
        alert("Module Deleted");
        window.location.href = "/Module"; // Redirect to home page
      } else {
        throw new Error("Failed to delete Module");
      }
    } catch (error) {
      console.error("Error deleting Module:", error.message);
      // Handle error scenarios
    }
  };

  return (
    <div>
      {<Sidebar />}
      <div className="asside">
        <div className="about-first">
          <div className="row">
            <div className="col-12 mb-24">
              <div className="bg-box">
                <div className="pro-add-new px-0">
                  <p>
                    Module <span>6</span>
                  </p>
                  <Link
                    type="button"
                    className="btn add-new"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-plus"></i> Add New
                  </Link>
                </div>
                {/* <!-- Add Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModal"
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
                          <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-4 mt-2">
                              <select
                                className="form-select form-control"
                                id="floatingSelectGrid"
                                aria-label="Floating label select example"
                                name="technology"
                                value={selectedTechnology}
                                onChange={handleSelectChange}
                              >
                                <option value="">Select Technology</option>
                                {technologies && technologies.map((tech) => (
                                  <option key={tech.id} value={tech.id}>
                                    {tech.technology}
                                  </option>
                                ))}
                              </select>
                              <label htmlFor="floatingSelectGrid">
                                Select Technology
                              </label>
                            </div>
                            <div className="form-floating mb-4">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInputModuleName"
                                placeholder="Module Name"
                                name="module"
                                value={moduleName}
                                onChange={(e) => setModuleName(e.target.value)}
                              />
                              <label htmlFor="floatingInputModuleName">
                                Module
                              </label>
                            </div>
                            <div className="form-floating mb-4">
                              <input
                                type="number"
                                className="form-control"
                                id="floatingInputHours"
                                placeholder="Hours"
                                name="hours"
                                value={hoursNumber}
                                onChange={(e) => setHoursNumber(e.target.value)}
                              />
                              <label htmlFor="floatingInputHours">
                                No of hours
                              </label>
                            </div>
                            <div className="form-floating mb-4">
                              <input
                                type="number"
                                className="form-control"
                                id="floatingInputPrize"
                                placeholder="Prize"
                                name="prize"
                                value={prize}
                                onChange={(e) => setPrize(e.target.value)}
                              />
                              <label htmlFor="floatingInputPrize">Prize</label>
                            </div>
                            <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                              <button
                                className="btn btn-upload"
                                // data-bs-dismiss="modal"
                                type="submit"
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
                            {/* Display response message */}
                            {/* {responseMessage && <p>{responseMessage}</p>} */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* <!--End Add Modal --> */}
                {/* <!-- Edit Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModaledit"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Edit Module
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
                {/* <!--End Edit Modal --> */}
                {/* <!-- Filter Modal --> */}
                <div
                  className="modal fade"
                  id="exampleModalfilter"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Apply Filter
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
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckDefault"
                            >
                              Native Android
                            </label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckChecked"
                            >
                              Native Android
                            </label>
                          </div>
                          <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                            <button
                              className="btn btn-reset"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              className="btn btn-upload me-0"
                              data-bs-dismiss="modal"
                            >
                              Apply Filter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--End Filter Modal --> */}
                <div className="row mb-3 justify-content-between align-items-center">
                  <div className="col-4">
                    <div className="filter">
                      <Link
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalfilter"
                      >
                        <i className="fa-solid fa-filter"></i> Filters
                      </Link>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="form-floating small-floating">
                      <input
                        type="text"
                        className="form-control py-2"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Search</label>
                    </div>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Module</th>
                      <th scope="col">Technology</th>
                      <th scope="col">No of Hours</th>
                      <th scope="col">Prize</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* RENDERING LODING */}
                    <div>
                      {/* Conditional rendering based on isLoading */}
                      {isLoading ? (
                        <p style={{ textAlign: 'center' }}>Loading...</p>

                      ) : (
                        <div>
                          {/* Render your fetched data or component here */}
                          {Array.isArray(technologies) && technologies.length > 0 ? (
                            technologies.map((tech) => (
                              <div key={tech.id}>{tech.name}</div>
                            ))
                          ) : (
                            <p>No technologies available</p>
                          )}
                        </div>
                      )}
                    </div>



                    {/* LODING MODULE ADDD */}


                    {Array.isArray(userModules) && userModules.length > 0 ? (
                      userModules.map((module, index) => (
                        <tr key={module.id}>
                          <th scope="row">{index + 1}</th>
                          <td className="td-technology">{module.module}</td>
                          <td>{module.technology_id}</td>
                          <td>{module.hours_number}</td>
                          <td>$ {module.prize}</td>
                          <td>

                            <div className="icon-up-del">
                              <Link
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModaledit"
                              >
                                <i className="fa-solid fa-pen"></i>
                              </Link>
                              <Link
                                to={{ pathname: `/${module.id}` }}
                                onClick={() => handleDelete(module.id)}
                                type="button"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>

                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}></td>
                      </tr>
                    )}

                  </tbody>
                </table>
                <div className="pro-add-new px-0 mb-0 pt-3">
                  <p>1 - 6 of 6</p>
                  <nav aria-label="...">
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                    </ul>
                  </nav>
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

export default Module;
