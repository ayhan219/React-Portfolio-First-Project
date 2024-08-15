import React, { useState } from "react";
import "./Navbar.css";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <VscAccount />
      </div>
      <div className="navbar-right">
        <Link
          to="/"
          className={activeLink === "/" ? "active" : ""}
          onClick={() => handleClick("/")}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={activeLink === "/projects" ? "active" : ""}
          onClick={() => handleClick("/projects")}
        >
          Project
        </Link>
        <Link
          to="/contact"
          className={activeLink === "/contact" ? "active" : ""}
          onClick={() => handleClick("/contact")}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
