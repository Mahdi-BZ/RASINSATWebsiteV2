import React, { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import community from "../json/community";

const Community = () => {
  var renderedView = community.map((v, index) => {
    return (
      <div key={index}>
        <Bounce triggerOnce={true}>
          <p>{v.description}</p>
        </Bounce>
        <Fade triggerOnce={true}>
          <div className="ui three column stackable grid">
            {v.imgs.map((img, index) => {
              return (
                <div className="column" key={index}>
                  <div className="ui segment">
                    <img
                      className={`img${index}`}
                      src={`${process.env.PUBLIC_URL}/imgs/community/${img}`}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    );
  });

  const [viewIndex, setViewIndex] = useState(0);

  return (
    <div className="community">
      <div className="ui container center aligned">
        <h2 className="section-header">Our Community</h2>
        <div
          className={`community-button ${
            viewIndex === 0 ? "community-button-active" : ""
          }`}
          onClick={() => {
            setViewIndex(0);
          }}
        >
          Members of the Week
        </div>
        <div
          className={`community-button ${
            viewIndex === 1 ? "community-button-active" : ""
          }`}
          onClick={() => {
            setViewIndex(1);
          }}
        >
          RAS Familly Gallery
        </div>
        <div
          className={`community-button ${
            viewIndex === 2 ? "community-button-active" : ""
          }`}
          onClick={() => {
            setViewIndex(2);
          }}
        >
          Team Building
        </div>
        {renderedView[viewIndex]}
      </div>
    </div>
  );
};

export default Community;
