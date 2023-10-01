import React from "react";
import imgcas from "../img/imgcas.png";
import casimg from "../img/casimg.png";
import spatify from "../img/spatify.svg";
import spatify1 from "../img/spatify1.svg";
import spatify2 from "../img/spatify2.svg";
import spatify3 from "../img/spatify3.svg";
import spatify4 from "../img/spatify4.svg";

function Header() {
  return (
    <div id="Header">
      <div className="container">
        <div className="menu">
          <img src={imgcas} alt="" />
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Episodes</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <section className="content">
          <img src={casimg} alt="" />
          <div>
            <h2>
              Take your podcast to the <br />
              next <span>level</span>
            </h2>
            <p>isten on</p>
            <div className="spatify">
              <img src={spatify} alt="" />
              <img src={spatify1} alt="" />
              <img src={spatify2} alt="" />
              <img src={spatify3} alt="" />
              <img src={spatify4} alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="text--title">
        <h3>Latest episodes</h3>
        <button className="btn">View all episodes</button>
      </div>
    </div>
  );
}
export default Header;
