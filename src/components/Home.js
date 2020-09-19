import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import Carousel from "react-bootstrap/Carousel";
import latestActivities from "../json/latestActivities";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      title: "IEEE RAS INSAT Student Branch Chapter ",
      description: "Robotics and Automation Society",
      imgUrl: "/imgs/team.webp",
    },
    {
      title: "“Our ambitions exceed Elon Musk's”",
      description: "",
      imgUrl: "/imgs/team.webp",
    },
  ];

  var renderedItems = carouselItems.map((item, index) => {
    return (
      <Carousel.Item key={index}>
        <img
          src={process.env.PUBLIC_URL + item.imgUrl}
          alt="Team 1"
          style={{ width: "100%" }}
        />
        <Carousel.Caption bsPrefix="carousal-slider-caption">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  var renderedAct = latestActivities.map((act, index) => {
    return (
      <div className="card" key={index}>
        <div className="image">
          <img
            src={`${process.env.PUBLIC_URL}/imgs/activities/${act.imgURL}`}
            alt="thumbnail"
          />
        </div>
        <div className="content">
          <div className="header">{act.name}</div>
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

  const animationHandler = (el) => {
    el.classList.remove("hide");
    el.classList.add(el.getAttribute("data-anim"));
  };

  return (
    <div className="home">
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true}>
        {renderedItems}
      </Carousel>

      <div className="latest-activities ">
        <div className="ui container ">
          <div className="ui vertical segment ">
            <h2 className="section-header">Lastest Activities</h2>
            <div className="ui link centered cards">{renderedAct}</div>
          </div>
        </div>
      </div>

      <div className="sponsors">
        <div className="ui container">
          <h2 className="section-header">Our Sponsors</h2>
          <div className="ui stackable five column grid">
            <div className="column">
              <InView
                as="img"
                threshold={0.5}
                onChange={(inView, entry) => {
                  if (inView) {
                    animationHandler(entry.target);
                  }
                }}
                src={`${process.env.PUBLIC_URL}/imgs/sponsors/BT.webp`}
                alt="BT"
                className="hide"
                data-anim="bounce-1"
              ></InView>
            </div>
            <div className="column">
              <InView
                as="img"
                threshold={0.5}
                onChange={(inView, entry) => {
                  if (inView) {
                    animationHandler(entry.target);
                  }
                }}
                src={`${process.env.PUBLIC_URL}/imgs/sponsors/polulu.webp`}
                alt="polulu"
                className="hide"
                data-anim="bounce-up"
              ></InView>
            </div>
            <div className="column">
              <InView
                as="img"
                threshold={0.5}
                onChange={(inView, entry) => {
                  if (inView) {
                    animationHandler(entry.target);
                  }
                }}
                src={`${process.env.PUBLIC_URL}/imgs/sponsors/sakly.webp`}
                alt="sakly"
                className="hide"
                data-anim="bounce-down"
              ></InView>
            </div>
            <div className="column">
              <InView
                as="img"
                threshold={0.5}
                onChange={(inView, entry) => {
                  if (inView) {
                    animationHandler(entry.target);
                  }
                }}
                src={`${process.env.PUBLIC_URL}/imgs/sponsors/smiths_interconnect.webp`}
                className="hide"
                alt="smiths interconnect"
                data-anim="bounce-up"
              ></InView>
            </div>
            <div className="column">
              <InView
                as="img"
                onChange={(inView, entry) => {
                  if (inView) {
                    animationHandler(entry.target);
                  }
                }}
                src={`${process.env.PUBLIC_URL}/imgs/sponsors/SEB.webp`}
                alt="SEB"
                className="hide"
                data-anim="bounce-2"
              ></InView>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <div className="ui container">
          <h2 className="section-header">Contact Us</h2>
          <form className="ui form">
            <InView
              onChange={(inView, entry) => {
                if (inView) {
                  animationHandler(entry.target);
                }
              }}
              className="required field hide"
              data-anim="bounce-1"
            >
              <label>First Name :</label>
              <input type="text" name="firstName" placeholder="First Name" />
            </InView>
            <InView
              onChange={(inView, entry) => {
                if (inView) {
                  animationHandler(entry.target);
                }
              }}
              className="required field hide"
              data-anim="bounce-2"
            >
              <label>Last Name :</label>
              <input type="text" name="lastName" placeholder="Last Name" />
            </InView>
            <InView
              onChange={(inView, entry) => {
                if (inView) {
                  animationHandler(entry.target);
                }
              }}
              className="required field hide"
              data-anim="bounce-1"
            >
              <label>Email :</label>
              <input type="email" name="email" placeholder="Email" />
            </InView>
            <InView
              onChange={(inView, entry) => {
                if (inView) {
                  animationHandler(entry.target);
                }
              }}
              className="required field hide"
              data-anim="bounce-2"
            >
              <label>Subject :</label>
              <input type="text" name="subject" placeholder="Subject" />
            </InView>
            <InView
              onChange={(inView, entry) => {
                if (inView) {
                  animationHandler(entry.target);
                }
              }}
              className="required field hide"
              data-anim="bounce-1"
            >
              <label>Message :</label>
              <textarea name="message" rows="5"></textarea>
            </InView>
            <InView
              as="button"
              onChange={(inView, entry) => {
                if (inView) {
                  animationHandler(entry.target);
                }
              }}
              className="ui button hide"
              data-anim="bounce-2"
            >
              Submit
            </InView>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
