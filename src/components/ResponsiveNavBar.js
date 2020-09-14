import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveNavBar = () => {
  return (
    <div className="responsive-nav">
      <NavLink exact to="/">
        <span> Home</span>
      </NavLink>
      <NavLink exact to="/aboutus">
        <span>About Us</span>
      </NavLink>
      <NavLink exact to="/awards">
        <span>Awards</span>
      </NavLink>
      <NavLink exact to="/activities">
        <span>Activities</span>
      </NavLink>
      <NavLink exact to="/projects">
        <span>Projects</span>
      </NavLink>
      <NavLink exact to="/community">
        <span>Our Community</span>
      </NavLink>
    </div>
  );
};

export default ResponsiveNavBar;
