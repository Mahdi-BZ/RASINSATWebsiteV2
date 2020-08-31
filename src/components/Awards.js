import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Awards = () => {
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
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018"
            iconStyle={{
              background: "#e3074a",
              color: "#000",
            }}
            icon={<i className=" inverted big trophy icon " />}
          >
            <h3 className="vertical-timeline-element-title">
              Outstanding Student Chapter in Tunisia
            </h3>

            <img className="award-img" src="imgs/Award2018-1.webp" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018"
            iconStyle={{
              background: "#e3074a",
              color: "#000",
            }}
            icon={<i className=" inverted big trophy icon " />}
          >
            <h3 className="vertical-timeline-element-title">
              Runner-UP EASC Acceleration Program 2018 with NRW
            </h3>

            <img className="award-img" src="imgs/Award2018-2.webp" />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017"
            iconStyle={{
              background: "#e3074a",
              color: "#000",
            }}
            icon={<i className=" inverted big trophy icon " />}
          >
            <h3 className="vertical-timeline-element-title">
              Best RAS Student Chapter Award
            </h3>
            <img className="award-img" src="imgs/Award2017-1.webp" />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Awards;
