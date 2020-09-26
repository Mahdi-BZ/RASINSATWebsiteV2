import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import activities from "../json/activities";

const Activities = () => {
  const renderedAct = activities.map((act, index) => {
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
          <Link to={`activities/${act.id}`}>
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
  });

  return (
    <div className="activities">
      <div className="ui container">
        <h2 className="section-header">Our Activities</h2>
        <Fade triggerOnce={true}>
          <div className="ui three stackable cards center aligned">
            {renderedAct}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Activities;
