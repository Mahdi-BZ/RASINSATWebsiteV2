import React from "react";
import { NavLink } from "react-router-dom";

const ResponsiveNavBar = () => {
  return (
    <div className="responsive-nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/aboutus">
        About Us
      </NavLink>
      <NavLink exact to="/awards">
        Awards
      </NavLink>
      <NavLink exact to="/activities">
        Activities
      </NavLink>
      <NavLink exact to="/projects">
        Projects
      </NavLink>
      <NavLink exact to="/community">
        Our Community
      </NavLink>
    </div>
  );
};

export default ResponsiveNavBar;
