import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import axios from "axios";
import Cookies from "js-cookie";
import config from "./config";

const Membership = () => {
  const { baseURL } = config;
  const location = useLocation();

  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //     // Retrieve userId from cookie when the component mounts
  //     const userIdFromCookie = Cookies.get('userId');
  //     if (userIdFromCookie) {
  //       setUserId(userIdFromCookie);
  //       // Redirect to Dashboard if userId is found in cookies
  //       navigate('/Dashboard');
  //     }
  //   }, [location.pathname, navigate]);

  const userId_2 = document.cookie.replace(
    /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const [formData, setFormData] = useState({
    user_id: userId_2,
    technology: "",
    hours: "",
  });

  const [apiResponse, setApiResponse] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseURL}api/AddTechnology/technology`,
        formData
      );
      if (response.data.message === "Data stored successfully!") {
        // Redirect to a different page upon successful registration
        //   window.location.href = "/"; // Redirect to home page
        alert("ADD Technology");
        window.location.href = "/Technology"; // Redirect to home page
      }
      setApiResponse(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setApiResponse("Error occurred during registration");
    }
  };

  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API when the component mounts loding

    const fetchData = async () => {
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
            body: JSON.stringify({ user_id: userId }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTechnologies(data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Move setIsLoading(false) inside the 'if' block after setting the data
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [deleteResponse, setDeleteResponse] = useState(null);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${baseURL}api/DeleteTechnology/deleteTechnology`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ technology_id: id }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDeleteResponse(data); // Store API response for display or further use
        alert("ARE YOU SURE DELETE..!");
        window.location.href = "/Technology"; // Redirect to home page
      } else {
        throw new Error("Failed to delete technology");
      }
    } catch (error) {
      console.error("Error deleting technology:", error.message);
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
                    Technology <span>6</span>
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

                {/* RENDERING LODING */}

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
                          <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-4 mt-2">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name="technology"
                                onChange={handleChange}
                                required
                              />
                              <label for="floatingInput">Technology</label>
                            </div>
                            <div className="form-floating mb-4">
                              <input
                                type="number"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name="hours"
                                onChange={handleChange}
                                required
                              />
                              <label for="floatingInput">Per Hours Rate</label>
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
                            {/* <p style={{ color: "red" }}>{apiResponse}</p> */}
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
                          Edit Technology
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
                {/* <!--End Edit Modal --> */}
                <div className="">
                  <div className="p-0 d-flex justify-content-end">
                    <div className="form-floating small-floating mb-3 text-end">
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
                      <th scope="col">Technology</th>
                      <th scope="col">Per Hours Rate</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(technologies) && technologies.length > 0 ? (
                      technologies.map((tech) => (
                        <tr key={tech.id}>
                          <td>{tech.sequence_number}</td>
                          <td>{tech.technology}</td>
                          <td>{tech.hourse}</td>
                          <td>
                            <div className="icon-up-del">
                              <Link
                                type="button"
                                to={{
                                  pathname: `/edit/${tech.id}`,
                                  state: { id: tech.id },
                                }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModaledit"
                              >
                                <i className="fa-solid fa-pen"></i>
                              </Link>
                              <Link
                                to={{ pathname: `/${tech.id}` }}
                                onClick={() => handleDelete(tech.id)}
                                type="button"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </Link>
                              {deleteResponse && (
                                <div>
                                  <p>API Response:</p>
                                  <pre>
                                    {JSON.stringify(deleteResponse, null, 2)}
                                  </pre>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center" }}>
                          No technologies available{" "}
                        </td>
                      </tr>
                    )}
                    <tr colSpan="6" style={{ textAlign: "center" }}>
                      <div>
                        {/* Conditional rendering based on isLoading */}
                        {isLoading ? (
                          <p style={{ textAlign: "center" }}>Loading...</p>
                        ) : (
                          <div>
                            {/* Render your fetched data or component here */}
                            {Array.isArray(technologies) &&
                            technologies.length > 0 ? (
                              technologies.map((tech) => (
                                <div key={tech.id}>{tech.name}</div>
                              ))
                            ) : (
                              <p></p>
                            )}
                          </div>
                        )}
                      </div>
                    </tr>
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

export default Membership;