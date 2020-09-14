import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    { title: "Test", description: "epsum sulum", imgUrl: "/imgs/team.webp" },
    { title: "Test", description: "epsum sulum", imgUrl: "/imgs/team.webp" },
  ];

  var renderedItems = carouselItems.map((item, index) => {
    return (
      <Carousel.Item key={index}>
        <img
          src={process.env.PUBLIC_URL + item.imgUrl}
          alt="Team 1"
          style={{ width: "100%" }}
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  const projects = [
    {
      title: "Neghlbouh",
      description: `“Neghlbouh” is a project that can help our country in his fight against “Covid-19” Virus. This project is a mobile application with a containment bracelet. The mobile application helps in avoiding the horizontal transmission by informing people about the crowded places and stores people movements to facilitate the targeted test. The bracelet is dedicated for people who are obliged to respect the quarantine. This project is with collaboration with IEEE CS INSAT SBC and IEEE IAS INSAT SBC.`,
      imgURL: "/imgs/neghlbouh.webp",
      links: [
        { name: "facebook", url: "https://www.facebook.com/INSAT.RAS/" },
        { name: "instagram", url: "https://www.instagram.com/ieee_ras_insat" },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/company/ieee-insat-ras",
        },
      ],
    },
    {
      title: "Neghlbouh",
      description: `“Neghlbouh” is a project that can help our country in his fight against “Covid-19” Virus. This project is a mobile application with a containment bracelet. The mobile application helps in avoiding the horizontal transmission by informing people about the crowded places and stores people movements to facilitate the targeted test. The bracelet is dedicated for people who are obliged to respect the quarantine. This project is with collaboration with IEEE CS INSAT SBC and IEEE IAS INSAT SBC.`,
      imgURL: "/imgs/neghlbouh.webp",
      links: [
        { name: "facebook", url: "https://www.facebook.com/INSAT.RAS/" },
        { name: "instagram", url: "https://www.instagram.com/ieee_ras_insat" },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/company/ieee-insat-ras",
        },
      ],
    },
    {
      title: "Neghlbouh",
      description: `“Neghlbouh” is a project that can help our country in his fight against “Covid-19” Virus. This project is a mobile application with a containment bracelet. The mobile application helps in avoiding the horizontal transmission by informing people about the crowded places and stores people movements to facilitate the targeted test. The bracelet is dedicated for people who are obliged to respect the quarantine. This project is with collaboration with IEEE CS INSAT SBC and IEEE IAS INSAT SBC.`,
      imgURL: "/imgs/neghlbouh.webp",
      links: [
        { name: "facebook", url: "https://www.facebook.com/INSAT.RAS/" },
        { name: "instagram", url: "https://www.instagram.com/ieee_ras_insat" },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/company/ieee-insat-ras",
        },
      ],
    },
  ];

  var renderedProj = projects.map((proj, index) => {
    return (
      <div className=" card" key={index}>
        <div className="image">
          <img src="imgs/neghlbouh.webp" alt="neghlbouh" />
        </div>
        <div className="content">
          <div className="header">{proj.title}</div>
          <div className="description">{proj.description}</div>
        </div>
        <div className="extra content">
          <div className="ui link horizontal list">
            {proj.links.map((link, index) => {
              return (
                <a key={index} href={link.url} target="blank" className="item">
                  <i className={`big ${link.name} icon`} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="pusher">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {renderedItems}
      </Carousel>

      <div className="projects ">
        <div className="ui container ">
          <div className="ui vertical segment center aligned">
            <h2 className="section-header">Projects</h2>
            <div className="ui link centered cards">{renderedProj}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
