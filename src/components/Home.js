import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="imgs/team.webp" alt="Team 1" />
          <Carousel.Caption>
            <h3>Test</h3>
            <p>epsum sulum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="imgs/team.webp" alt="Team 2" />
          <Carousel.Caption>
            <h3>Test2</h3>
            <p>epsum sulum churchum alam</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="projects">
        <div className="ui container">
          <div className="ui vertical segment center aligned">
            <h2 className="section-header">Projects</h2>
            <div className="ui link centered cards">
              <div className=" card">
                <div className="image">
                  <img src="imgs/neghlbouh.webp" alt="neghlbouh" />
                </div>
                <div className="content">
                  <div className="header">Neghlbouh</div>
                  <div className="description">
                    “Neghlbouh” is a project that can help our country in his
                    fight against “Covid-19” Virus. This project is a mobile
                    application with a containment bracelet. The mobile
                    application helps in avoiding the horizontal transmission by
                    informing people about the crowded places and stores people
                    movements to facilitate the targeted test. The bracelet is
                    dedicated for people who are obliged to respect the
                    quarantine. This project is with collaboration with IEEE CS
                    INSAT SBC and IEEE IAS INSAT SBC.
                  </div>
                </div>
                <div className="extra content">
                  <div className="ui link horizontal list">
                    <a
                      href="https://www.instagram.com/ieee_ras_insat"
                      target="blank"
                      className="item"
                    >
                      <i
                        className="big facebook icon link"
                        href="https://www.facebook.com/INSAT.RAS/"
                        target="blank"
                      ></i>
                    </a>
                    <a
                      href="https://www.instagram.com/ieee_ras_insat"
                      target="blank"
                      className="item"
                    >
                      <i className="big instagram icon"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ieee-insat-ras"
                      target="blank"
                      className="item"
                    >
                      <i className="big linkedin icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" card">
                <div className="image">
                  <img src="imgs/neghlbouh.webp" alt="neghlbouh" />
                </div>
                <div className="content">
                  <div className="header">Neghlbouh</div>
                  <div className="description">
                    “Neghlbouh” is a project that can help our country in his
                    fight against “Covid-19” Virus. This project is a mobile
                    application with a containment bracelet. The mobile
                    application helps in avoiding the horizontal transmission by
                    informing people about the crowded places and stores people
                    movements to facilitate the targeted test. The bracelet is
                    dedicated for people who are obliged to respect the
                    quarantine. This project is with collaboration with IEEE CS
                    INSAT SBC and IEEE IAS INSAT SBC.
                  </div>
                </div>
                <div className="extra content">
                  <div className="ui link horizontal list">
                    <a
                      href="https://www.facebook.com/INSAT.RAS/"
                      target="blank"
                      className="item"
                    >
                      <i className="big facebook icon"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/ieee_ras_insat"
                      target="blank"
                      className="item"
                    >
                      <i className="big instagram icon"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ieee-insat-ras"
                      target="blank"
                      className="item"
                    >
                      <i className="big linkedin icon"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src="imgs/neghlbouh.webp" alt="neghlbouh" />
                </div>
                <div className="content">
                  <div className="header">Neghlbouh</div>
                  <div className="description">
                    “Neghlbouh” is a project that can help our country in his
                    fight against “Covid-19” Virus. This project is a mobile
                    application with a containment bracelet. The mobile
                    application helps in avoiding the horizontal transmission by
                    informing people about the crowded places and stores people
                    movements to facilitate the targeted test. The bracelet is
                    dedicated for people who are obliged to respect the
                    quarantine. This project is with collaboration with IEEE CS
                    INSAT SBC and IEEE IAS INSAT SBC.
                  </div>
                </div>
                <div className="extra content">
                  <div className="ui link horizontal list">
                    <a
                      href="https://www.facebook.com/INSAT.RAS/"
                      target="blank"
                      className="item"
                    >
                      <i className="big facebook icon"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/ieee_ras_insat"
                      target="blank"
                      className="item"
                    >
                      <i className="big instagram icon"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ieee-insat-ras"
                      target="blank"
                      className="item"
                    >
                      <i className="big linkedin icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
