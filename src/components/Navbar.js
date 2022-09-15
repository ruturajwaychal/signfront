/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
        <a className="navbar-brand text-white" href="#">
          CRUD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link text-white" href="#">
                Get All Users
              </a> */}
              <Link className="nav-link home-link text-white" to="/">
                Get All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link home-link text-white" to="/adduser">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link home-link text-white" to="/edituser">
                Edit User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
