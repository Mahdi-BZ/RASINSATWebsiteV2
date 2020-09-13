import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  var renderedAct = [];
  for (let i = 0; i < 9; i++) {
    renderedAct.push(
      <div className=" card" key={i}>
        <div className="image">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/activities/ult2019/ult2019-1.webp`}
            alt="thumbnail"
          />
        </div>
        <div className="content">
          <div className="header">ULT Robots 4.0</div>
          <div className="meta">2019</div>
          <div className="description">
            This year we have participated in ULT Robots 4.0 also.
          </div>
        </div>
        <div className="extra content center aligned">
          <Link to={`activities/${i}`}>
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
  }

  return (
    <div className="activities">
      <div className="ui container">
        <h2 className="section-header">Our Activities</h2>
        <div className="ui three stackable cards center aligned">
          {renderedAct}
        </div>
      </div>
    </div>
  );
};

export default Activities;
