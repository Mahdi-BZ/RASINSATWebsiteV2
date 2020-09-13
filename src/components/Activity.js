import React from "react";
import { useParams } from "react-router-dom";

const Activity = () => {
  //let { id } = useParams();

  const imgs = [
    "ult2019-1.webp",
    "ult2019-2.webp",
    "ult2019-3.webp",
    "ult2019-4.webp",
    "ult2019-5.webp",
    "ult2019-6.webp",
    "ult2019-7.webp",
    "ult2019-8.webp",
  ];

  const renderedImgs = imgs.map((img, index) => {
    return (
      <div className="column" key={index}>
        <div className="ui segment">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/activities/ult2019/${img}`}
            alt="test"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="activity">
      <div className="ui container center aligned">
        <h2 className="header">ULT Robots 4.0</h2>
        <p className="date">December 2019</p>
        <div className="ui horizontal list">
          <a href="google.com" target="blank" className="item">
            <i className="large facebook f icon"></i>
          </a>
          <a href="google.com" target="blank" className="item">
            <i className="large twitter icon"></i>
          </a>
          <a href="google.com" target="blank" className="item">
            <i className="large instagram icon"></i>
          </a>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/activities/ult2019/ult2019-1.webp`}
          alt="test"
          className="main-img"
        />
        <p className="description">
          Sed tincidunt vitae leo vitae sagittis. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Morbi
          pellentesque purus venenatis facilisis aliquet. Etiam pretium luctus
          ornare. Maecenas id libero luctus, mattis elit ut, mollis massa. Duis
          convallis ipsum purus, at hendrerit velit scelerisque mollis. Sed
          augue eros, molestie sed viverra ultrices, egestas vel nulla. Sed
          consequat purus sem, non vestibulum nunc faucibus et. Proin vehicula
          eu arcu eu facilisis. Nunc dapibus leo turpis, ut mollis mi egestas
          nec. Nulla quis nisl nisi. In tortor sem, sollicitudin eu nibh eu,
          efficitur commodo tortor. In hendrerit molestie turpis, ac ullamcorper
          dolor. Proin nulla sapien, iaculis vitae risus a, tempor semper risus.
          <br />
          <br />
          Morbi vel nibh libero. Nulla dignissim auctor nisl, vitae hendrerit mi
          tincidunt nec. Cras ornare nisl ac mauris ullamcorper tempor. Mauris
          quis ante non neque tempor congue. Morbi ullamcorper ante eget lacus
          ornare aliquet. Suspendisse potenti. Nam vitae nibh dapibus, laoreet
          tortor venenatis, tempor ex. Vivamus finibus tincidunt dolor vel
          tincidunt. Aliquam eu lectus sodales, aliquam ligula at, tincidunt
          enim. Vivamus vel quam id massa finibus viverra at nec tellus.
        </p>

        <h4 className="sub-header">Photos</h4>
        <div className="ui two column grid">{renderedImgs}</div>
      </div>
    </div>
  );
};

export default Activity;
