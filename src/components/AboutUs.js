import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import teamMembers from "../json/teammembers";

const AboutUs = () => {
  

  const renderedTeam = teamMembers.map((member, index) => {
    return (
      <div className="column" key={index}>
        <Fade triggerOnce={true} direction={index % 2 ? "right" : "left"}>
          <img
            className=""
            src={`${process.env.PUBLIC_URL}/imgs/team/${member.imgURL}`}
            alt={`teamMember${index + 1}`}
          />
        </Fade>
        <Bounce className="text" triggerOnce={true}>
          <h6>{member.name}</h6>
          <p>{member.jobDescription}</p>
          <div className="ui horizontal list">
            <a
            href={member.links.facebook}
            target="blank"
            className="item"
            >
              <i className="large facebook icon"/>
            </a>
            <a
            href={member.links.linkedin}
            target="blank"
            className="item"
            >
              <i className="large linkedin icon"/>
            </a>
          </div>
        </Bounce>
      </div>
    );
  });

  return (
    <div className="about-us">
      <div className="international">
        <div className="ui container center aligned">
          <h2 className="section-header">International</h2>
          <div className="ui two column stackable grid centered">
            <div className="row">
              <div className=" five wide column">
                <h4 className="custom-header">
                  <span>IEEE</span>
                </h4>
                <p>
                  IEEE, The Institute of Electrical and Electronics Engineers is
                  the world’s largest technical professional organization
                  dedicated to advancing technology for the benefit of humanity.
                </p>
              </div>

              <div className="six wide column">
                <h4 className="custom-header">
                  <span>RAS</span>
                </h4>
                <p>
                  The IEEE Robotics and Automation Society's objectives are
                  scientific, literary and educational in character. The Society
                  strives for the advancement of the theory and practice of
                  robotics and automation engineering and science.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="six wide column">
                <h4 className="custom-header">
                  <span>Region 8</span>
                </h4>
                <p> Region 8 covers covers Europe, Middle East and Africa.</p>
              </div>
            </div>

            <div div="ui vertical divider"></div>
          </div>
        </div>
      </div>
      <div className="national">
        <div className="ui container center aligned">
          <h2 className="section-header">National</h2>
          <div className="ui two column stackable grid centered">
            <div className="row">
              <div className="six wide column">
                <h4 className="custom-header">
                  <span>IEEE Tunisia Section</span>
                </h4>
                <p>
                  IEEE Tunisia Section aims to spread IEEE Activities to all
                  corners of the country by educational and technical
                  activities, human networking, and to develop technology and
                  its applications for humanitarian challenges. The section
                  supports Chapters, special interest groups, student activities
                  and student awards.
                </p>
              </div>

              <div className="six wide column">
                <h4 className="custom-header">
                  <span>RAS Tunisia Chapter</span>
                </h4>
                <p>
                  The RAS Tunisia Chapter offer the opportunity for RAS members
                  in Tunisia to network with colleagues, develop activities for
                  professional development, and share expertise through
                  technical exchange.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="six wide column">
                <h4 className="custom-header">
                  <span>IEEE INSAT SB</span>
                </h4>
                <p>
                  IEEE INSAT student branch is a branch of IEEE at insat
                  institute, Tunis, Tunisia. Founded on january 2nd, 2013 by 12
                  students of the institute, it has now about 550 members and by
                  that It breaks the record of the largest student branch in
                  Region 8.
                </p>
              </div>

              <div className="six wide column">
                <h4 className="custom-header">
                  <span>RAS INSAT Chapter</span>
                </h4>
                <p>
                  Robotics and Automation Society (RAS) Chapter is one of IEEE’s
                  39 technical chapters. It was founded in 2014 with only a few
                  members. Today, it has become one of INSAT’s most attractive
                  club for students who have a passion for robotics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="excom-word">
        <div className="container ">
          <h2 className="section-header">Chairman's Word</h2>
          <img alt="chairman's word" src={`${process.env.PUBLIC_URL}/imgs/chairmanWord.webp`}/>
          <p>In IEEE RAS INSAT SBC, we aim to share our knowledge and expertise with our members.<br/> Our goal is to create a cohesive community fond of robotics, that’s able to share its proficiency and leave its footprint in this field. This was my childhood dream and by joining IEEE RAS INSAT SBC, I knew since the first days that I was in the right place and took my first steps to make my dream come true. 
<br/>When joining IEEE RAS chapter, you will have the opportunity to practice your technical skills and to implement your ideas into realistic projects.
</p>
        </div>
      </div>
      <div className="team">
        <div className="container center aligned">
          <h2 className="section-header">Our Team</h2>
          <div className="ui two column stackable centered grid">
            {renderedTeam}
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
