import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear all cookies related to the user upon visiting the logout page
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });

    // Redirect to the home page after logging out
    navigate("/");
  }, [navigate]); // Include navigate in the dependency array to prevent useEffect from raising a warning

  // You can render something here if needed, like a message
  return null;
};

export default Logout;
