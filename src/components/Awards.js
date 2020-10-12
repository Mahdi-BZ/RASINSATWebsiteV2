import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const imgs = [
  {
    date: 2020,
    name: "Innovation Challenge 24H Enicarthage",
    imgURL: "AWARD2012-1.webp",
  },
  {
    date: 2019,
    name: "Student Branch Chapter of the Year",
    imgURL: "AWARD2019-1.webp",
  },
  {
    date: 2018,
    name: "Outstanding Student Chapter in Tunisia",
    imgURL: "AWARD2018-1.webp",
  },
  {
    date: 2018,
    name: "Runner-UP EASC Acceleration Program 2018 with NRW",
    imgURL: "AWARD2018-2.webp",
  },
  {
    date: 2017,
    name: "Best RAS Student Chapter Award",
    imgURL: "AWARD2017-1.webp",
  },
];

const Awards = () => {
  var rendredImgs = imgs.map((value, index) => {
    return (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--education"
        date={value.date}
        iconStyle={{
          background: "#e3074a",
          color: "#000",
        }}
        icon={<i className=" inverted big trophy icon " />}
      >
        <h3 className="vertical-timeline-element-title">{value.name}</h3>

        <img
          alt={value.name}
          className="award-img"
          src={`${process.env.PUBLIC_URL}/imgs/awards/${value.imgURL}`}
        />
      </VerticalTimelineElement>
    );
  });

  return (
    <div className="awards">
      <div className="ui container">
        <h2 className="section-header">Awards</h2>
        <p className="section-sub-header">
          Everybody loves awards, and we ,as IEEE INSAT RAS SBC, are no
          exception!
          <br /> In recognition of our continuous efforts, we have received many
          awards. Here is a list of the most recent ones:
        </p>
        <VerticalTimeline>{rendredImgs}</VerticalTimeline>
      </div>
    </div>
  );
};

export default Awards;
