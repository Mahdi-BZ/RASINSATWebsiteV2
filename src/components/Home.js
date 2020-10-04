import React /*useState */ from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-bootstrap/Carousel";
import latestActivities from "../json/latestActivities";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";

const Home = () => {
  //const [index, setIndex] = useState(0);

  const { register, handleSubmit, reset, errors } = useForm();

  /*const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }*/

  const carouselItems = [
    {
      title: "IEEE RAS INSAT Student Branch Chapter ",
      description: "Robotics and Automation Society",
      moto: "“Our ambitions exceed Elon Musk's”",
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
          <p className="moto">{item.moto}</p>
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

  const onsubmit = (data) => {
    let templateParams = {
      from_name: data.firstName + " " + data.lastName,
      user_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs.send(
      "service_u5jt4ss",
      "template_tlzgpjy",
      templateParams,
      "user_q8e4FXE0st9dPWaw6e4l3"
    );

    reset();
  };

  return (
    <div className="home">
      <Carousel indicators={false} controls={false}>
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
              <Fade direction="left" triggerOnce={true}>
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/sponsors/BT.webp`}
                  alt="BT"
                  className=""
                />
              </Fade>
            </div>
            <div className="column">
              <Fade direction="up" triggerOnce={true}>
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/sponsors/polulu.webp`}
                  alt="polulu"
                  className=""
                />
              </Fade>
            </div>
            <div className="column">
              <Fade direction="down" triggerOnce={true}>
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/sponsors/sakly.webp`}
                  alt="sakly"
                  className=""
                />
              </Fade>
            </div>
            <div className="column">
              <Fade direction="up" triggerOnce={true}>
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/sponsors/smiths_interconnect.webp`}
                  className=""
                  alt="smiths interconnect"
                />
              </Fade>
            </div>
            <div className="column">
              <Fade direction="right" triggerOnce={true}>
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/sponsors/SEB.webp`}
                  alt="SEB"
                  className=""
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <div className="ui container">
          <h2 className="section-header">Contact Us</h2>
          <form className="ui form" onSubmit={handleSubmit(onsubmit)}>
            <Fade
              direction="right"
              className="required field "
              triggerOnce={true}
            >
              <label>First Name :</label>
              <input
                type="text"
                ref={register({
                  required: <p className="error">First Name is required</p>,
                })}
                name="firstName"
                placeholder="First Name"
              />
            </Fade>
            {errors.firstName && errors.firstName.message}
            <Fade
              direction="left"
              className="required field "
              triggerOnce={true}
            >
              <label>Last Name :</label>
              <input
                type="text"
                ref={register({
                  required: <p className="error">Last Name is required</p>,
                })}
                name="lastName"
                placeholder="Last Name"
              />
            </Fade>
            {errors.lastName && errors.lastName.message}
            <Fade
              direction="right"
              className="required field "
              triggerOnce={true}
            >
              <label>Email :</label>
              <input
                type="email"
                ref={register({
                  required: <p className="error">Email is required</p>,
                  validate: (value) =>
                    /\S+@\S+\.\S+/.test(value) || (
                      <p className="error">Invalid Email</p>
                    ),
                })}
                name="email"
                placeholder="Email"
              />
            </Fade>
            {errors.email && errors.email.message}
            <Fade
              direction="left"
              className="required field "
              triggerOnce={true}
            >
              <label>Subject :</label>
              <input
                type="text"
                ref={register({
                  required: <p className="error">Subject is required</p>,
                })}
                name="subject"
                placeholder="Subject"
              />
            </Fade>
            {errors.subject && errors.subject.message}
            <Fade
              direction="right"
              className="required field "
              triggerOnce={true}
            >
              <label>Message :</label>
              <textarea
                name="message"
                rows="5"
                ref={register({
                  required: <p className="error">Message is required</p>,
                })}
              ></textarea>
            </Fade>
            {errors.message && errors.message.message}
            <Fade direction="left" triggerOnce={true}>
              <div className="ui button ">Submit</div>
            </Fade>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
