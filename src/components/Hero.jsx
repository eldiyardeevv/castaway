import React from "react";
import spatify5 from "../img/spatify5.jpg";
import spatify6 from "../img/spatify6.jpg";
import spatify7 from "../img/spatify7.jpg";

const Hero = () => {
  return (
    <div className="container">
      <div className="Hero">
        <div className="content-hero">
          <img className="spatify5" src={spatify5} alt="" />
          <div className="hero-text">
            <button className="btnGear">Gear</button>
            <a className="okno-text" href="text">
              Episode 1
            </a>
            <h2 className="okno-text1">Should you get outboard audio gear?</h2>
            <p className="okno-text2">
              Is hardware really worth it when it comes to podcasting? The
              answer is...it depends. Here's our reasons on why you might want
              to consider picking something up.
            </p>
            <button className="hero-btn">View Episode Details</button>
          </div>
        </div>
        <div className="content-hero">
          <img className="spatify5" src={spatify6} alt="" />
          <div className="hero-text">
            <button className="btnGear">Tips & Tricks</button>
            <a className="okno-text" href="text">
              Episode 2
            </a>
            <h2 className="okno-text1">
              Mic tricks to take you to the next level
            </h2>
            <p className="okno-text2">
              Stop rolling with those default settings on your mic. These small
              tweaks will take you from sounding good to great.
            </p>
            <button className="hero-btn">View Episode Details</button>
          </div>
        </div>
        <div className="content-hero">
          <img className="spatify5" src={spatify7} alt="" />
          <div className="hero-text">
            <button className="btnGear">Gear</button>
            <a className="okno-text" href="text">
              Episode 1
            </a>
            <h2 className="okno-text1">The best microphone under $200</h2>
            <p className="okno-text2">
              With so many microphones on the market, how are you supposed to
              know what's the best? Take a look at our top picks.
            </p>
            <button className="hero-btn">View Episode Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
