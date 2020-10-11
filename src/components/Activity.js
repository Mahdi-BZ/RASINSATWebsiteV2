import React from "react";
import activities from "../json/activities";
import { useParams } from "react-router-dom";

const Activity = () => {
  let { type, id } = useParams();

  const act = activities[type].find((a) => {
    return a.id === parseInt(id);
  });
  const renderedImgs = act.imgsURL.map((imgURL, index) => {
    return (
      <div className="column" key={index}>
        <div className="ui segment">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/activities/${imgURL}`}
            alt="test"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="activity">
      <div className="ui container center aligned">
        <h2 className="header">{act.title}</h2>
        <p className="date">{act.date}</p>
        <div className="ui horizontal list">
          <a href={act.links.facebook} target="blank" className="item">
            <i className="large facebook f icon"></i>
          </a>
          <a href={act.links.instagram} target="blank" className="item">
            <i className="large instagram icon"></i>
          </a>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/activities/${act.mainImgURL}`}
          alt="test"
          className="main-img"
        />
        <p className="description">{act.description}</p>

        <h4 className="sub-header">{act.imgsURL.length != 0 ? "Photos" : ""}</h4>
        <div className="ui two column stackable grid">{renderedImgs}</div>
      </div>
    </div>
  );
};

export default Activity;
