import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="ui container">
        <div className="ui three column inverted stackable grid center aligned ">
          <div className="row ">
            <div className="column">
              <h3>IEEE RAS</h3>
              <p>
                when we talk about RAS we'll be talking about : Success,
                hardwork dedication, awards, passion, sacrifice, teamwork, and
                endless love.
              </p>
            </div>
            <div className="column">
              <div className="ui fluid vertical devided inverted secondary menu">
                <h3>USEFUL LINKS</h3>
                <Link to="/" className="item">
                  Home
                </Link>
                <Link to="/aboutus" className="item">
                  About Us
                </Link>
                <Link to="/awards" className="item">
                  Awards
                </Link>
                <Link to="/activities" className="item">
                  Activities
                </Link>
                <Link to="/projects" className="item">
                  Projects
                </Link>
                <Link to="/community" className="item">
                  Our Community
                </Link>
              </div>
            </div>
            <div className="column">
              <h3>CONTACT US</h3>
              <div className="ui huge relaxed list">
                <div className="item">
                  <div className="content">
                    <p>
                      {" "}
                      INSAT
                      <br /> Centre Urbain Nord
                      <br /> BP 676 - 1080 <br />
                      Tunis Cedex
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <h6>
                      <i className="ui phone icon"></i>
                    </h6>
                    <p>+216 58 945 105</p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <h6>
                      <i className="ui mail icon"></i>
                    </h6>
                    <p>amine.feki.10@ieee.org</p>
                  </div>
                </div>
              </div>
              <div className="ui inverted link horizontal list">
                <a
                  href="https://www.facebook.com/INSAT.RAS/"
                  target="blank"
                  className="item"
                >
                  <i className=" big facebook icon"></i>
                </a>
                <a
                  href="https://www.instagram.com/ieee_ras_insat"
                  target="blank"
                  className="item"
                >
                  <i className="big  instagram icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/ieee-insat-ras"
                  target="blank"
                  className="item"
                >
                  <i className=" big linkedin icon"></i>
                </a>
              </div>
            </div>
            {/* <div className="column">
              <h3>MAP</h3>
              <iframe
                title="google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.9824119529317!2d10.194013315228506!3d36.842897272994925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c6d1e93bef%3A0x4153c4733f285343!2sNational%20Institute%20of%20Applied%20Science%20and%20Technology!5e0!3m2!1sen!2stn!4v1597422504415!5m2!1sen!2stn"
                frameBorder="0"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
  </div>*/}
          </div>
        </div>
        <p className="copyright">© 2020,IEEE RAS INSAT. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
