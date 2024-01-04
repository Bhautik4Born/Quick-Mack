import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import user from "../Image/user.png";

const Sidebar = () => {
  return (
    <div>
      {/* nav fixx */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <Link to={"/Dashboard"}>
            <img src={logo} />
          </Link>
        </div>
        <div className="overflow-y">
          <div className="sidebar-link">
            <ul>
              <li className="active">
                <NavLink to={"/Dashboard"}>
                  <i className="fa-solid fa-house"></i>Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to={"/About"}>
                  <i className="fa-solid fa-user"></i>Account Settings
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="page-line">
            <hr />
            <span>Pages</span>
          </div>
          <div className="sidebar-link">
            <ul>
              <li>
                <NavLink to={"/Technology"}>
                  <i className="fa-solid fa-code"></i>Technology
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Module"}>
                  <i className="fa-solid fa-puzzle-piece"></i>Module
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Project"}>
                  <i className="fa-solid fa-rocket"></i>Project
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="page-line">
            <hr />
            <span>useful links</span>
          </div>
          <div className="sidebar-link">
            <ul>
              <li>
                <NavLink to={"Dashboard"}>
                  <i className="fa-regular fa-credit-card"></i>Terms and
                  Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to={"Dashboard"}>
                  <i className="fa-regular fa-eye"></i>Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to={"Dashboard"}>
                  <i className="fa-regular fa-credit-card"></i>Refund Policy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="pro-btn">
          <Link to={"/Membership"} type="submit" className="btn btn-pro">
            Upgrade to Pro
          </Link>
        </div>
      </div>
      <div className="fixx">
        <nav className="top-header navbar navbar-expand-lg sticky-top navbar-light">
          <div className="py-2 container-fluid">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Search"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navheight justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbarbottom mb-lg-0 align-items-lg-center">
                <li className="nav-item">
                  <NavLink
                    className="nav-link bell"
                    aria-current="page"
                    to={"#"}
                  >
                    <i className="fa-regular fa-bell"></i>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="navbar-user position-relative border-0 bg-transparent"
                  >
                    <img src={user} />
                    <span className="position-absolute bottom-0 start-100 translate-middle p-1 bg-light-green border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
