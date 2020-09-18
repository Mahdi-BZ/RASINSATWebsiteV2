import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="projects">
      <div className="ui container">
        <h2 className="section-header">Projects</h2>
        <div className="custom-card" data-aos="fade-right">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/neghlbouh.webp`}
            alt="neghlbouh"
          />
          <div className="content">
            <h3>Neghlbouh</h3>
            <p>
              “Neghlbouh” is a project that can help our country in his fight
              against “Covid-19” Virus. This project is a mobile application
              with a containment bracelet. The mobile application helps in
              avoiding the horizontal transmission by informing people about the
              crowded places and stores people movements to facilitate the
              targeted test. The bracelet is dedicated for people who are
              obliged to respect the quarantine. This project is with
              collaboration with IEEE CS INSAT SBC and IEEE IAS INSAT SBC.
            </p>
            <Link to={`projects/0`}>
              <div className="ui animated button">
                <div className="visible content">See More</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
