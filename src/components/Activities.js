import React from "react";
import { Fade, Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import activities from "../json/activities";

const Activities = () => {
  const renderedAct = [];
  Object.keys(activities).map(
    (key) =>
      (renderedAct[key] = activities[key].map((act, index) => {
        return (
          <div className="card" key={index}>
            <div className="image">
              <img
                src={`${process.env.PUBLIC_URL}/imgs/activities/${act.mainImgURL}`}
                alt="thumbnail"
              />
            </div>
            <div className="content">
              <div className="header">{act.title}</div>
              <div className="meta">{act.date}</div>
              <div className="description">{act.description}</div>
            </div>
            <div className="extra content center aligned">
              <Link to={`activities/${key}/${act.id}`}>
                <div className="ui animated button">
                  <div className="visible content">See More</div>
                  <div className="hidden content">
                    <i className="right arrow icon"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      }))
  );

  return (
    <div className="activities">
      <div className="ui container">
        <h2 className="section-header">Our Activities</h2>
        <Bounce triggerOnce={true}>
          <h2 className="sub-section">
            <span>Competitions</span>
          </h2>
        </Bounce>
        <Fade triggerOnce={true}>
          <div className="ui three stackable cards center aligned">
            {renderedAct["competition"]}
          </div>
        </Fade>
        <Bounce triggerOnce={true}>
          <h2 className="sub-section">
            <span>Workshops</span>
          </h2>
        </Bounce>
        <Fade triggerOnce={true}>
          <div className="ui three stackable cards center aligned">
            {renderedAct["workshop"]}
          </div>
        </Fade>
        <Bounce triggerOnce={true}>
          <h2 className="sub-section">
            <span>Projects</span>
          </h2>
        </Bounce>
        <Fade triggerOnce={true}>
          <div className="ui three stackable cards center aligned">
            {renderedAct["project"]}
          </div>
        </Fade>
        <Bounce triggerOnce={true}>
          <h2 className="sub-section">
            <span>Humanitarian</span>
          </h2>
        </Bounce>
        <Fade triggerOnce={true}>
          <div className="ui three stackable cards center aligned">
            {renderedAct["humanitarian"]}
          </div>
        </Fade>
        <Bounce triggerOnce={true}>
          <h2 className="sub-section">
            <span>IEEE DAY</span>
          </h2>
        </Bounce>
        <Fade triggerOnce={true}>
          <div className="ui three stackable cards center aligned">
            {renderedAct["ieeeday"]}
          </div>
        </Fade>
        <Bounce triggerOnce={true}>
          <h2 className="sub-section">
            <span>NRW</span>
          </h2>
        </Bounce>
        <Fade triggerOnce={true}>
          <div className="ui three stackable cards center aligned">
            {renderedAct["nrw"]}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Activities;
