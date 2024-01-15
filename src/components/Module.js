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
  // const [hours_Number, setHoursNumber] = useState("");
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
  // Add module....
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
          hours_number: parseInt(hours_number),
          prize: parseInt(prize),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      if (data.message === "Data stored successfully!") {
        // Notify the user about successful module addition
        alert("Module added successfully....!");
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

  const [totalRecords, setTotalRecords] = useState(0);
  const [userModules, setUserModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTechIdFilter, setSelectedTechIdFilter] = useState('');

  const handleFilter = (technologies) => {
    setSelectedTechnologies(technologies);
    setSelectedTechIdFilter(technologies.join(','));
  };

  const fetchData = async () => {
    try {
      const user_Id = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      const userId = user_Id; // Replace with your user ID retrieval logic

      const response = await fetch(`${baseURL}api/UserModle/getUserModule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId, Filtertechnology: selectedTechIdFilter }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();
      if (responseData && responseData.total_records) {
        setTotalRecords(responseData.total_records);
      }

      if (responseData && responseData.data) {
        setUserModules(responseData.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedTechIdFilter]);




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

  // upadte details
  const [module, steModule] = useState(null);
  const [selectedTechId, setSelectedTechId] = useState(null);
  const [techDetail, setTechDetail] = useState(null);
  const [hours_number, setHours_number] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(`${baseURL}api/ModuleUpdatesdetail/getModule`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ module_id: selectedTechId }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const RData = await response.json();
        if (RData && RData.technology) {
          const { module, technology_id, hours_number, prize } = RData.technology;
          steModule(module);
          setTechDetail(technology_id);
          setHours_number(hours_number);
          setPrize(prize);

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedTechId]); // Fetch data whenever selectedTechId changes

  const handleIconClick = (id) => {
    setSelectedTechId(id);
  };
  //update module

  const ModuleUpdates = async () => {
    try {
      const response = await fetch('https://quickmake.graphiglow.in/api/ModuleUpdates/moduleupdates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          module_id: selectedTechId,
          module: module,
          Technology_id: techDetail,
          hours_number: hours_number,
          prize: prize,


        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
      }

      const data = await response.json();
      if (data.message === 'Data updated successfully!') {
        alert(`Data updated successfully!`);
        window.location.href = "/Module";
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10; // Number of records to display per page

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = userModules.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(userModules.length / recordsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);



  const handleCheckboxChange = (event) => {
    const selectedTechnology = event.target.value;
    setSelectedTechnologies((prevSelected) => {
      if (prevSelected.includes(selectedTechnology)) {
        // If already selected, remove it
        return prevSelected.filter((id) => id !== selectedTechnology);
      } else {
        // If not selected, add it
        return [...prevSelected, selectedTechnology];
      }
    });
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
                  <p style={{ display: "flex" }}>
                    Total Module<span>
                      <div>
                        {isLoading ? (
                          <p>Loading...</p>
                        ) : (
                          <div>
                            {totalRecords}
                          </div>
                        )}
                      </div>
                    </span>
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
                                value={selectedTechId}
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
                                id="floatingInputModuleName"
                                placeholder="Module Name"
                                name="module"
                                value={moduleName}
                                onChange={(e) => setModuleName(e.target.value)}
                                required
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
                                value={hours_number}
                                onChange={(e) => setHours_number(e.target.value)}
                                required
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
                                required
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
                          <form onSubmit={(e) => {
                            e.preventDefault(); // Prevents default form submission behavior
                            ModuleUpdates();
                          }}>
                            <div className="form-floating mb-4 mt-2">
                              <select
                                className="form-select form-control"
                                id="floatingSelectGrid"
                                aria-label="Floating label select example"
                                name="technology"
                                value={techDetail}
                                onChange={(e) => setTechDetail(e.target.value)}
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
                                value={module}
                                onChange={(e) => steModule(e.target.value)}
                              />
                              <label for="floatingInput">Module</label>
                            </div>
                            <div className="form-floating mb-4">
                              <input
                                type="number"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={hours_number}
                                onChange={(e) => setHours_number(e.target.value)}
                              />
                              <label for="floatingInput">No of hours</label>
                            </div>
                            <div className="form-floating mb-4">
                              <input
                                type="number"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={prize}
                                onChange={(e) => setPrize(e.target.value)}
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
                      </div>
                      <div className="modal-body">
                        <div className="user-details">
                          {Array.isArray(technologies) && technologies.length > 0 ? (
                            technologies.map((tech) => (
                              <div key={tech.id} className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={`technology-${tech.id}`}
                                  value={tech.id}
                                  checked={selectedTechnologies.includes(tech.id)}
                                  onChange={handleCheckboxChange}
                                />
                                <label className="flexCheckChecked    " htmlFor={`technology-${tech.id}`}>
                                  {tech.technology}
                                </label>
                              </div>
                            ))
                          ) : (
                            <p>No Modules Available</p>
                          )}
                          <p>Selected Technologies: {selectedTechnologies.join(", ")}</p>

                          <div className="upload-reset-btn mb-0 justify-content-center pt-2">
                            <button className="btn btn-reset" data-bs-dismiss="modal">
                              Cancel
                            </button>
                            <button className="btn btn-upload me-0" data-bs-dismiss="modal" onClick={() => handleFilter(selectedTechnologies)} >
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
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center' }}>
                        <div>
                          {/* Conditional rendering based on isLoading */}
                          {isLoading ? (
                            <p style={{ textAlign: 'center' }}>Loading...</p>
                          ) : (
                            <div>
                              {/* Render your fetched data or component here */}
                              {Array.isArray(totalRecords) && totalRecords.length > 0 ? (
                                totalRecords.map((tech) => (
                                  <div key={tech.id}>{tech.name}</div>
                                ))
                              ) : (
                                <p style={{ textAlign: 'center' }}>
                                  {totalRecords.length > 0 ? 'No Module available' : ''}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                    {/* LODING MODULE ADDD */}
                    {Array.isArray(currentRecords) && currentRecords.length > 0 ? (
                      currentRecords.map((module, index) => (
                        <tr key={module.id}>
                          <th scope="row">{module.sequence_number}</th>
                          <td className="td-technology">{module.module}</td>
                          <td>{module.technology}</td>
                          <td>{module.hours_number}</td>
                          <td>$ {module.prize}</td>
                          <td>
                            <div className="icon-up-del">
                              <Link
                                to={{ pathname: `/${module.id}` }}
                                onClick={() => handleIconClick(module.id)}
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
                          <tr><td colSpan="6" style={{ textAlign: 'center' }}></td> </tr>
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
                  <p>
                    {`Showing ${indexOfFirstRecord + 1} - ${indexOfLastRecord > userModules.length
                      ? userModules.length
                      : indexOfLastRecord
                      } of ${userModules.length}`}
                  </p>
                  <nav aria-label="...">
                    <ul className="pagination pagination-sm mb-0">
                      {pageNumbers.map((number) => (
                        <li
                          key={number}
                          className={`page-item ${currentPage === number ? "active" : ""}`}
                        >
                          <button onClick={() => handlePageChange(number)} className="page-link">
                            {number}
                          </button>
                        </li>
                      ))}
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
