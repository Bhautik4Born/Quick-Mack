import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import axios from "axios";
import config from "./config";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const CreateProject = () => {
  const { baseURL } = config;
  // const [activeLinks, setActiveLinks] = useState([]);
  const [conferenceData, setConferenceData] = useState([]);
  const [client_name, setClient_name] = useState([]);
  const [project_name, setProject_name] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");

  const userId = document.cookie.replace(
    /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  // const windowlocation = new Ob(window.location.search);

  const projectId = "id"; // Replace this with your actual project ID

  const queryParameters = new URLSearchParams(window.location.search);
  const retrievedProjectId = queryParameters.get("projectId");
  // console.log(retrievedProjectId);

  const buttonStyle = {
    border: "none",
    color: "#FFF",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.4px",
    textTransform: "uppercase",
    padding: "11px",
    borderRadius: "6px",
    background: "#F7A51B",
    boxShadow:
      "0px 1px 5px 0px rgba(50, 71, 92, 0.02), 0px 2px 2px 0px rgba(50, 71, 92, 0.04), 0px 3px 1px -2px rgba(50, 71, 92, 0.06)",
  };

  // const name = queryParameters.get("name")
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userId_2 = document.cookie.replace(
        /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      const response = await fetch(`${baseURL}api/AddProject/project`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId_2,
          client_name: client_name,
          project_name: project_name,
          module_id: "0",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const queryParameters = new URLSearchParams(window.location.search);
      const retrievedProjectId = queryParameters.get("projectId");
      // console.log(retrievedProjectId);

      const data = await response.json();
      if (data.message === "Data stored successfully!") {
        window.location.href = `/CreateProject/?projectId=${data.project_id}`; // Redirect to CreateProject page with project ID
        console.log("Registration Redirect Success");
      } else {
        console.log("Registration Error");
      }
      setResponseMessage(data.project_id);

      setResponseMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleclient = (event) => {
    setClient_name(event.target.value);
  };
  const handleproject = (event) => {
    setProject_name(event.target.value);
  };

  // const handleLinkClick = (tech) => {
  //   console.log("Clicked:", tech);
  //   setActiveLinks((prevActiveLinks) =>
  //     prevActiveLinks.includes(tech)
  //       ? prevActiveLinks.filter((link) => link !== tech)
  //       : [...prevActiveLinks, tech]
  //   );
  //   console.log("Active Links:", activeLinks);
  // };

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const userId = document.cookie.replace(
          /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        const response = await axios.post(
          "https://quickmake.graphiglow.in/api/ModuleTechnology/module",
          { user_id: userId } // Replace with the actual user_id
        );

        // Update the conferenceData state with the fetched data
        setConferenceData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  const { productID } = useParams(); // Assuming 'productID' is the parameter name

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId_2 = document.cookie.replace(
          /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        const queryParameters = new URLSearchParams(window.location.search);
        const retrievedProjectId = queryParameters.get("projectId");
        // console.log(retrievedProjectId);

        const response = await fetch(
          "https://quickmake.graphiglow.in/api/ProjectModule/project",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userId_2,
              project_id: retrievedProjectId,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const responseData = await response.json();
        setData(responseData.data || []); // Ensure setData receives an array even if responseData.data is undefined
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error: Set state, show an error message, etc.
      } finally {
        // Set isLoading to false after data fetching completes (success or error)
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Runs once on component mount
  // Function to delete a module via API call

  ///delete api

  const handleDelete = async (module_ID) => {
    try {
      const queryParameters = new URLSearchParams(window.location.search);
      const retrievedProjectId = queryParameters.get("projectId");
      console.log(retrievedProjectId);

      // const queryModule = new URLSearchParams(window.location.search);
      // const retrievedModuleID = queryModule.get("module_ID");
      console.log(module_ID.toString());

      const response = await fetch(
        `${baseURL}api/ProjectModuleDelete/deleteModule`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            project_id: retrievedProjectId,
            module_id: module_ID.toString(),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // setDeleteResponse(data); // Store API response for display or further use
        alert(`Module Deleted Successfully ${retrievedProjectId}`);
        window.location.href = `/CreateProject/?projectId=${retrievedProjectId}`; // Redirect to home page
      } else {
        throw new Error("Failed to delete Module");
      }
    } catch (error) {
      alert(`Fail${retrievedProjectId}`);
      console.error("Error deleting Module:", error.message);
      // Handle error scenarios
    }
  };

  // Example usage of deleteModule function (trigger this as needed)
  // Call this function when you want to delete a module, passing the module ID as an argument
  // Replace 'moduleIdToDelete' with the actual ID of the module you want to delete
  // deleteModule(moduleIdToDelete);
  //


  const handleDownloadPDF = () => {
    const table = document.querySelector('.table');

    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');

      // Add an image to PDF
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 120);

      // Save the PDF
      pdf.save('table.pdf');
    });
  };

  const [activeLinks, setActiveLinks] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  // const data = { technology_names: [...] }; // Replace [...] with your actual technology data

  // const [activeLinks, setActiveLinks] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // const data = { technology_names: [...] }; // Replace [...] with your actual technology data

    // ... (Your existing code)

    const handleLinkClick = (tech) => {
      console.log("Clicked:", tech);
  
      // Toggle the selection of the clicked technology
      setActiveLinks((prevActiveLinks) =>
        prevActiveLinks.includes(tech.technology_name)
          ? prevActiveLinks.filter((link) => link !== tech.technology_name)
          : [...prevActiveLinks, tech.technology_name]
      );
  
      // Update the selected technologies list
      setSelectedTechnologies((prevSelectedTechnologies) =>
        prevSelectedTechnologies.includes(tech.technology_ID)
          ? prevSelectedTechnologies.filter((id) => id !== tech.technology_ID)
          : [...prevSelectedTechnologies, tech.technology_ID]
      );
  
      console.log("Active Links:", activeLinks);
      console.log("Selected Technologies:", selectedTechnologies);
    };
  
    const selectedTechnologiesString = selectedTechnologies.join(',');
  
    const [totalPrize, setTotalPrize] = useState("0");
    const [totalHours, setTotalHours] = useState("0");
    const [moduleName, setModuleName] = useState("");
  
    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://quickmake.graphiglow.in/api/ModuleTimeCalculation/calculate",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                type: "hourse",
                technology_id: selectedTechnologiesString,
                module_name:moduleName,
              }),
            }
          );
  
          const data = await response.json();
  
          // Update state with the received data
          setTotalPrize(`$${data.total_prize}`);
          setTotalHours(data.total_hours_number.toString());
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      // Call the function to fetch data
      fetchData();
    }, [selectedTechnologiesString ]); // Include selectedTechnologiesString in the dependency array
  

  return (
    <div>
      {<Sidebar />}
      <div className="asside">
        <div className="about-first">
          <div className="row">
            <div className="col-4 mb-24">
              <div className="bg-box-new h-auto mb-24">
                <div className="pro-add-new">
                  <h4>Select Module</h4>
                  <Link type="button" className="btn add-new">
                    Add Module
                  </Link>
                </div>
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
                <div className="d-flex search-project justify-content-between align-items-center">
                  <div className="filter">
                    <Link
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalfilter"
                    >
                      <i className="fa-solid fa-filter"></i> Filters
                    </Link>
                  </div>
                  <div className="form-floating small-floating">
                    <input
                      type="text"
                      className="form-control py-2"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Search Module</label>
                  </div>
                </div>
              </div>
              {/* LODING DATA FEATUERS */}
              <div>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <div>
                    {/* Render your fetched data or component here */}
                    {/* For example, iterate over 'data' */}
                    {data.map((item) => (
                      <div key={item.id}>{item.name}</div>
                      // Render whatever content you need with the fetched data
                    ))}
                  </div>
                )}
              </div>
              <div className="all-project-table all-project-plus p-1">
                <div>
                  {conferenceData && Array.isArray(conferenceData) ? (
                    conferenceData.map((data) => (
                      <div
                        className="video-conference h-auto mb-10"
                        key={data.id}
                      >
                        <div className="project-one p-0 mt-0 bg-transparent">
                          <div className="project-photo-discription">
                            <div className="form-check plus-check">
                              <form
                                method="POST"
                                action="https://quickmake.graphiglow.in/API/ModuleProject.php"
                              >
                                <input
                                  type="hidden"
                                  name="user_id"
                                  value={userId}
                                ></input>
                                <input
                                  type="hidden"
                                  name="module_id"
                                  value={data.id}
                                ></input>
                                <input
                                  type="hidden"
                                  name="project_id"
                                  value={retrievedProjectId}
                                ></input>
                                <br />
                                <br />
                                <div
                                  className="five-tech"
                                  style={{ flexWrap: "wrap" }}
                                >
                                  {data &&
                                    Array.isArray(data.technology_names) ? (
                                    data.technology_names.map((tech) =>
                                      activeLinks.includes(
                                        tech.technology_name
                                      ) ? (
                                        <p key={tech.technology_ID}>
                                          <input
                                            type="hidden"
                                            name="technology_ids[]"
                                            value={tech.technology_ID} // Pass techName value directly
                                          />
                                          <button
                                            style={{ display: "none" }}
                                            type="hidden"
                                            className="active"
                                            onClick={() =>
                                              handleLinkClick(
                                                tech.technology_name
                                              )
                                            }
                                          >
                                            {tech.technology_name}
                                          </button>
                                        </p>
                                      ) : 0
                                    )
                                  ) : (
                                    <p>No technology names available</p>
                                  )}
                                </div>

                                <button>++</button>
                              </form>

                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id={`flexCheckChecked${data.id}`}
                              />
                              <label
                                className="form-check-label video-font-size"
                                htmlFor={`flexCheckChecked${data.id}`}
                              >
                                <b>{data.module}</b>
                              </label>
                            </div>
                          </div>
                          <div className="price-hours">
                            <b>{data.moduleName}</b>
                            <h3>{totalPrize}</h3>
                            <h4>{totalHours}</h4>
                          </div>
                        </div>
                        <div>
                          <div className="five-tech" style={{ flexWrap: "wrap" }}>
                            {data && Array.isArray(data.technology_names) ? (
                              data.technology_names.map((tech) => (
                                <p key={tech.technology_ID}>
                                  <a
                                    className={activeLinks.includes(tech.technology_name) ? "active" : ""}
                                    onClick={() => handleLinkClick(tech)}
                                  >
                                    {tech.technology_name}
                                  </a>
                                </p>
                              ))
                            ) : (
                              <p>No technology names available</p>
                            )}
                          </div>

                          {selectedTechnologies.length > 0 && (
                            <div>
                              {/* <h2>Selected Technology IDs</h2> */}
                              <p>{selectedTechnologiesString}</p>
                              {/* You can also display additional details if needed */}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No conference data available</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-8 mb-24">
              <div className="bg-box-new h-auto">
                <form onSubmit={handleSubmit}>
                  <div className="search-project quotation my-1">
                    <h5 className="me-2">Quotation :</h5>
                    <div className="form-floating small-floating me-2">
                      <input
                        type="text"
                        className="form-control py-2"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={client_name}
                        onChange={handleclient}
                      />
                      <label for="floatingInput">Clint Name</label>
                    </div>
                    <div className="form-floating small-floating me-2">
                      <input
                        type="text"
                        className="form-control py-2"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={project_name}
                        onChange={handleproject}
                      />
                      <label for="floatingInput">Project Name</label>
                    </div>pdf
                    <div className="form-check form-switch me-2">
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Base on Hours
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                  <table className="table tablee mt-3 table-scroll small-first-col">
                    <thead>
                      <tr className="bg-temp">
                        <th scope="col">No</th>
                        <th scope="col">Module</th>
                        <th scope="col">No Of Hours</th>
                        <th scope="col">Prize</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody className="all-project-table body-half-screen">
                      {data && data.length > 0 ? (
                        data.map((item, index) => (
                          <React.Fragment key={`data-row-${index}`}>
                            {item.project_id === "0" ? (
                              <tr key={`no-data-${index}`}>
                                <td colSpan="5">No data found</td>
                              </tr>
                            ) : item.module_details &&
                              item.module_details.length > 0 ? (
                              item.module_details.map((detail, detailIndex) => (
                                <tr key={`${item.id}-${detailIndex}`}>
                                  <th scope="row">{detail.sequence_number}</th>
                                  <td>
                                    {detail && detail.module
                                      ? detail.module
                                      : "Not found data"}
                                  </td>
                                  <td>
                                    {detail && detail.hours_number
                                      ? detail.hours_number
                                      : ""}
                                  </td>
                                  <td>
                                    ${" "}
                                    {detail && detail.prize ? detail.prize : ""}
                                  </td>
                                  <td>
                                    <div className="icon-up-del justify-content-center">
                                      <Link
                                        to={{
                                          pathname: `/CreateProject/module_ID=${detail.id}&projectId=${retrievedProjectId}`,
                                        }}
                                        onClick={() => handleDelete(detail.id)}
                                        type="button"
                                      >
                                        <i className="fa-solid fa-trash"></i>
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr key={`no-details-${index}`}>
                                <td colSpan="5">No module details found</td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5">No data available</td>
                        </tr>
                      )}
                    </tbody>

                    <tfoot>
                      <tr className="last-tr-project">
                        <th></th>
                        <td>
                          <button style={buttonStyle} onClick={handleDownloadPDF}>Download PDF</button>
                          <div>
                            {/* <button onClick={handleDownloadPDF}>Download PDF</button> */}
                          </div>
                        </td>
                        <td>
                          <b>Net Subtotal :</b>
                        </td>
                        <td>500</td>
                        <td>$ 5000</td>
                        <td>
                          <div className="save-next">
                            {/* <Link to={"#"}>Save & Next </Link> */}
                            <button style={buttonStyle}>Save & Next</button>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
              </div>
            </div>
          </div>
        </div>
        {<Footer />}
      </div>
    </div>
  );
};

export default CreateProject;
