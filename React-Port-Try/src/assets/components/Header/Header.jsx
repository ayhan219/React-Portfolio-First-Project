import React from "react";
import "./Header.css";
import web from "../../../../public/web.jpg"

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-left">
        <div className="header-left-content">
            <h3>Personal <span>Full Stack</span> Web Developer</h3>
            <img src={web} alt="" />
        </div>
      </div>
      <div className="header-right">
        <hr />
        <div className="header-right-text">
            <h5>For More Information About me</h5>
        </div>
        <div className="header-right-button">
            <button>Click Here</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
