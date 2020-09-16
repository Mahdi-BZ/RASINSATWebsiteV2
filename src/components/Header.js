import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const handler = (e) => {
    const scrollTop = e.currentTarget.scrollY;
    if (scrollTop > 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  });

  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="ui container">
        <div className="ui secondary menu inverted">
          <div className="image">
            <img
              src={`${process.env.PUBLIC_URL}/imgs/RAS-logo-white.png`}
              alt="RAS INSAT Logo"
            />
          </div>

          <div className="ui inverted menu right">
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
      <div
        className="ui massive icon toggle button"
        onClick={() => {
          setActive(!active);
        }}
      >
        <i className="inverted sidebar icon right floated"></i>
      </div>
      <div
        className={`responsive-nav ${active ? "active" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <NavLink
          exact
          to="/"
          onClick={() => {
            setActive(false);
          }}
        >
          <span> Home</span>
        </NavLink>
        <NavLink
          exact
          to="/aboutus"
          onClick={() => {
            setActive(false);
          }}
        >
          <span>About Us</span>
        </NavLink>
        <NavLink
          exact
          to="/awards"
          onClick={() => {
            setActive(false);
          }}
        >
          <span>Awards</span>
        </NavLink>
        <NavLink
          exact
          to="/activities"
          onClick={() => {
            setActive(false);
          }}
        >
          <span>Activities</span>
        </NavLink>
        <NavLink
          exact
          to="/projects"
          onClick={() => {
            setActive(false);
          }}
        >
          <span>Projects</span>
        </NavLink>
        <NavLink
          exact
          to="/community"
          onClick={() => {
            setActive(false);
          }}
        >
          <span>Our Community</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
