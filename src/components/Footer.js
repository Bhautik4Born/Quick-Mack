import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="foorer-sec">
          <p>
            © 2023 Made With <i className="fa-regular fa-heart"></i> By{" "}
            <Link to={"/Dashboard"}>Quick Maker</Link>
          </p>
          <p>
            Presented By <Link to={"/Dashboard"}>4born Solutions</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
