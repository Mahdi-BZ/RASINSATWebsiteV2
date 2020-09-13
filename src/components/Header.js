import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="site-header">
      <div className="ui container">
        <div className="ui secondary menu inverted">
          <div className="image">
            <img
              src={`${process.env.PUBLIC_URL}/imgs/RAS-logo-white.png`}
              alt="RAS INSAT Logo"
            />
          </div>
          <div className=" menu right">
            <NavLink exact to="/" className="item">
              Home
            </NavLink>
            <NavLink exact to="/aboutus" className="item">
              About Us
            </NavLink>
            <NavLink exact to="/awards" className="item">
              Awards
            </NavLink>
            <NavLink exact to="/activities" className="item">
              Activities
            </NavLink>
            <NavLink exact to="/projects" className="item">
              Projects
            </NavLink>
            <NavLink exact to="/community" className="item">
              Our Community
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
