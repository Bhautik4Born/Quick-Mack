import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import user from "../Image/user.png";
import axios from "axios";
import config from "./config";
import Cookies from "js-cookie";

const About = () => {
  const { baseURL } = config;
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

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    organizations: "",
    mobile_number: "",
    address: "",
    state: "",
    zip: "",
    country: "USA",
    language: "English",
    timezone: "(GMT-11:00) International Date Line West",
    currency: "USD",
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
        `${baseURL}/api/ProfileUpdate/updateUser`, // Fixed concatenation
        { user_id: 1, ...formData }
      );

      // Handling API response
      setApiResponse(response.data.message || "Unknown response");
    } catch (error) {
      console.error("Error:", error);
      setApiResponse("Error occurred during the API call");
    }
  };

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch the user_id from cookies or wherever you store it
    const userIdFromCookies = 1; // Replace this with your method to get the user_id from cookies

    // Make the API call
    axios
    .post(`${baseURL}api/UserDetail/getUserByID`, {
        user_id: userIdFromCookies,
      })
      .then((response) => {
        setUserDetails(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        // Handle errors, show error message, etc.
      });
  }, []);

  
  return (
    <div>
      {<Sidebar />}
      <div className="asside">
        <div className="about-first">
          <div className="row">
            <div className="col-12 mb-24">
              <div className="bg-box">
                <div className="account-details">
                  <div className="about-page">
                    <h5>Account Details</h5>
                    <p>User id is :- {userId}</p>
                  </div>
                  <div className="upload-img">
                    <div className="show-img">
                      <img src={user} alt="" />
                    </div>
                    <div className="allowed-ext">
                      <div className="upload-reset-btn">
                        <button className="btn btn-upload">
                          Upload new photo
                        </button>
                        <button className="btn btn-reset">Reset</button>
                      </div>
                      <p>Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                  </div>
                </div>
                
                <div className="user-details">
                  <form className="row" onSubmit={handleSubmit}>
                    {userDetails ? (
                      <div className="form-floating lable-col col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          name="first_name"
                          onChange={handleChange}
                          // value={userDetails.first_name}
                          defaultValue={userDetails.first_name}
                        />
                        <label htmlFor="floatingInput">First Name</label>
                      </div>
                    ) : (
                      <p></p>
                    )}
                  {userDetails ? (

                    <div className="form-floating lable-col col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="last_name"
                        onChange={handleChange}
                        defaultValue={userDetails.last_name}

                      />
                      <label for="floatingInput">Last Name</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                    {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        onChange={handleChange}
                        defaultValue={userDetails.email}
                      />
                      <label for="floatingInput">E-mail</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                  {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="organizations"
                        onChange={handleChange}
                        defaultValue={userDetails.organizations}
                      />
                      <label for="floatingInput">Organization</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                    {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="mobile_number"
                        onChange={handleChange}
                        defaultValue={userDetails.mobile_number}
                      />
                      <label for="floatingInput">Phone Number</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                    {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="address"
                        onChange={handleChange}
                        defaultValue={userDetails.address}
                      />
                      <label for="floatingInput">Address</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                  {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="state"
                        onChange={handleChange}
                        defaultValue={userDetails.state}
                      />
                      <label for="floatingInput">State</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                  {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="zip"
                        onChange={handleChange}
                        defaultValue={userDetails.zip}
                      />
                      <label for="floatingInput">Zip Code</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                    {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <select
                        className="form-select form-control"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                        name="country"
                        onChange={handleChange}
                        defaultValue={userDetails.country}
                      >
                        <option selected>USA</option>
                        <option value="1">USA</option>
                        <option value="2">USA</option>
                        <option value="3">USA</option>
                      </select>
                      <label for="floatingSelectGrid">Country</label>
                    </div>
                    ) : (
                      <p></p>
                    )}

                    {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <select
                        className="form-select form-control"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                        name="language"
                        onChange={handleChange}
                        defaultValue={userDetails.language}
                      >
                        <option selected>English</option>
                        <option value="1">English</option>
                        <option value="2">English</option>
                        <option value="3">English</option>
                      </select>
                      <label for="floatingSelectGrid">Language</label>
                    </div>
                    ) : (
                      <p></p>
                    )}
                    {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <select
                        className="form-select form-control"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                        name="timezone"
                        onChange={handleChange}
                        defaultValue={userDetails.timezone}
                      >
                        <option selected>
                          (GMT-11:00) International Date Line West
                        </option>
                        <option value="1">
                          (GMT-11:00) International Date Line West
                        </option>
                        <option value="2">
                          (GMT-11:00) International Date Line West
                        </option>
                        <option value="3">
                          (GMT-11:00) International Date Line West
                        </option>
                      </select>
                      <label for="floatingSelectGrid">Timezone</label>
                    </div>
                    ) : (
                      <p></p>
                    )}
                    {userDetails ? (
                    <div className="form-floating lable-col col-md-6 mb-4">
                      <select
                        className="form-select form-control"
                        id="floatingSelectGrid"
                        aria-label="Floating label select example"
                        name="currency"
                        onChange={handleChange}
                        defaultValue={userDetails.currency}
                      >
                        <option selected>USD</option>
                        <option value="1">USD</option>
                        <option value="2">USD</option>
                        <option value="3">USD</option>
                      </select>
                      <label for="floatingSelectGrid">Currency</label>
                    </div>
                    ) : (
                      <p></p>
                    )}
                    <div className="upload-reset-btn mb-0">
                      <button className="btn btn-upload">Save changes</button>
                      <button className="btn btn-reset">Reset</button>
                    </div>
                    {apiResponse && (
                      <div className="mt-3">
                        <p style={{ color: "red" }}>{apiResponse}</p>
                      </div>
                    )}
                  </form>
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

export default About;
