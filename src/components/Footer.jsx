import React from "react";
import imgcas from "../img/imgcas.png";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import fezbook from "../img/fezbook.svg";

import spatify from "../img/spatify.svg";
import spatify1 from "../img/spatify1.svg";
import spatify2 from "../img/spatify2.svg";
import spatify3 from "../img/spatify3.svg";
import spatify4 from "../img/spatify4.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="Footer">
        <div className="footblock">
          <img src={imgcas} alt="" />
          <div className="insttwi">
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={fezbook} alt="" />
          </div>
        </div>
        <div className="nav-text">
          <p>Home</p>
          <p>About</p>
          <p>Episodes</p>
          <p>Contact</p>
        </div>
        <div className="foot-text">
          <p>Style Guide</p>
          <p>Instructions</p>
          <p>Changelog</p>
          <p>Credit</p>
          <p>Powered by Webflow</p>
          <p>Licenses</p>
        </div>
        <div className="foot-img">
          <img src={spatify} alt="" />
          <img src={spatify1} alt="" />
          <img src={spatify2} alt="" />
          <img src={spatify3} alt="" />
          <img src={spatify4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
