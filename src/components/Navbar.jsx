import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Navbar.css";
import logo from "../assets/bnt-logo--colored (1).svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="Biontech Logo" className="navbar-logo" />
        </div>

        {/* User section */}
        <div className="d-flex align-items-center user-info" >
          <span className="navbar-user-text">Pavan</span>
          <div className="navbar-avatar">JP</div>
          <div className="dropdown">
            <button 
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{color:"gray"}}
            ></button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-navbar">
              <li>
                <a className="dropdown-item" href="#">
                  Pavan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Developer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
