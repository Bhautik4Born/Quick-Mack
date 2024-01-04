import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../logo.svg";
import axios from "axios";
import Cookies from 'js-cookie';
import config from "./config";


const Signin = () => {
  const { baseURL } = config;
  const location = useLocation();
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve userId from cookie when the component mounts
    const userIdFromCookie = Cookies.get('userId');
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
      // Redirect to Dashboard if userId is found in cookies
      navigate('/Dashboard');
    }
  }, [location.pathname, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [messageColor, setMessageColor] = useState('red'); // State to determine message color


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${baseURL}api/login/login`,
        {
          email: email,
          password: password,
        }
      );

      if (response.data.message === 'Login successful') {
        Cookies.set('userId', response.data.userId, { expires: 7 });
        // Redirect to home page or change route here if using React Router
        window.location.href = '/Dashboard';
        setMessageColor('green'); // Change message color to green on success
        setApiResponse('Login successful');
      }

      setApiResponse(response.data.message);

    } catch (error) {
      console.error("Error:", error);
      alert("Please enter valid credentials");
      setApiResponse("Error occurred during login");
       const buttonStyle = {
          color: "green",
        };
    }
  };
  useEffect(() => {
    if (apiResponse === "Login successful") {
      alert("Login successful");
      navigate('/Dashboard');
    } else if (apiResponse === "Email not registered Please register..") {
      alert("Email not registered. Please register..");
    }else if (apiResponse === "Please enter valid credentials") {
      alert("Please enter valid credentials");
    }else if (apiResponse === "Email and password are required") {
      alert("Email and password are required");
    } else if (apiResponse === "Invalid password. Please enter a valid password.") {
      alert("Invalid password. Please enter a valid password.");
    }
   
  }, [apiResponse, navigate])


  return (
    <div>
      <div className="container">
        <div className="row vh-100 d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-8 col-12 my-3">
            <div className="signin-page">
              <img src={logo} />
              <h2>Welcome to Quick Make! 👋</h2>
              <p>Please sign-in to your account and start the adventure</p>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex justify-content-between align-content-center my-3">
                  <div className="form-check remember-me">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Remember me
                    </label>
                  </div>
                  <Link to={"#"} className="forgot-pass">
                    Forgot Password?
                  </Link>
                </div>
                <button type="submit" className="btn btn-login">
                  Sign in
                </button>
                {/* <p style={{ color: "red" }}>{apiResponse}</p> */}
                <p style={{ color: messageColor }}>{apiResponse}</p>
              </form>
              <div className="create-acc">
                <p>
                  New on our platform?{" "}
                  <Link to={"/Signup"}> Create an account</Link>
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

export default Signin;
