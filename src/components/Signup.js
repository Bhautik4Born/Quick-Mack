import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import axios from "axios";
import Cookies from "js-cookie";
import config from "./config";

const Signup = () => {
  const { baseURL } = config;
  const location = useLocation();
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve userId from cookie when the component mounts
    const userIdFromCookie = Cookies.get("userId");
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
      // Redirect to Dashboard if userId is found in cookies
      navigate("/Dashboard");
    }
  }, [location.pathname, navigate]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobileNumber: "",
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
        `${baseURL}api/user/register`,
        formData
      );
      if (response.data.message === "User registered successfully") {
        // Redirect to a different page upon successful registration
        alert("Signup Successfully...!");
        window.location.href = "/"; // Redirect to home page
      } else if (response.data.message === "All fields are required") {
        alert("All fields are required");
      } else if (response.data.message === "Enter the valid user name ") {
        alert("Enter the valid user name");
      } else if (response.data.message === "Username  already registered") {
        alert("Please enter valid Username");
      } else if (
        response.data.message === "Email or mobile number already registered"
      ) {
        alert("Email or mobile number already registered");
      } else if (
        response.data.message ===
        "Password must contain at least 8 characters with at least one special character, one uppercase letter, and one number."
      ) {
        alert(
          "Password must contain at least 8 characters with at least one special character, one uppercase letter, and one number"
        );
      } else if (response.data.message === "PASSWORD already registered.") {
        alert("PASSWORD already registered.");
      }
      setApiResponse(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setApiResponse("Error occurred during registration");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row vh-100 d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-8 col-12 my-3">
            <div className="signin-page">
              <img src={logo} />
              <h2>Adventure starts here 🚀</h2>
              <p>Make your Quotation easy and accurate!</p>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="mobileNumber"
                    className="form-control"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="name@example.com"
                    minLength={10}
                    maxLength={10}
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="mobileNumber">Mobile Number</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn btn-login">
                  Sign up
                </button>
                <p style={{ color: "red" , display:"none" }}>{apiResponse}</p>
              </form>
              <div className="create-acc">
                <p>
                  Already have an account?{" "}
                  <Link to={"/"}> Sign in instead</Link>
                </p>
              </div>
              <div className="hr-or">
                <hr />
                <span>or</span>
                <hr />
              </div>
              <div className="social-login">
                <Link to={"#"}>
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to={"#"}>
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link to={"#"}>
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link to={"#"}>
                  <i className="fa-brands fa-google"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
