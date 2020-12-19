import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import logo from "../Allassarts/logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    let closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
      };
      let opennav = () => {
        document.getElementById("myNav").style.width = "100%";
      }; 
      return (
        <header className=" header">
          <div className="logo">
            <img src={logo} alt="logo" width="200px" />
          </div>
          <div className="menu" id="myNav">
            <nav className="navbar">
              <span className="times" onClick={closeNav}>
                &times;
              </span>
              <NavLink activeClassName="active_class " exact to="/" className="nav">
                Home
              </NavLink>
              <NavLink
                activeClassName="active_class"
                exact
                to="/skill"
                className="nav"
              >
                Skills
              </NavLink>
              <NavLink
                activeClassName="active_class"
                exact
                to="/project"
                className="nav"
              >
                Project
              </NavLink>
              <NavLink
                activeClassName="active_class"
                exact
                to="/about"
                className="nav"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active_class"
                exact
                to="/contact"
                className="nav"
              >
                Contact
              </NavLink>
            </nav>
          </div>
          <h6 onClick={opennav}>
            <i className="fas fa-2x fa-bars"></i>
          </h6>
        </header>
      );
    }
    


export default Navbar
