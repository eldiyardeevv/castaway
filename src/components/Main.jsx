import React from "react";
import spatify8 from "../img/spatify8.png";
import spatify9 from "../img/spatify9.png";

const Main = () => {
  return (
    <div className="container">
      <div className="main-blocks">
        <div className="main-block">
          <button className="main-btn">
            <img src={spatify8} alt="" />
          </button>
          <p className="meetP" href="text">
            Meet your host
          </p>
          <h1 className="main-title">Jacob Paulaner</h1>
          <p className="main-text1">
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </p>
          <p className="main-text2">
            He's here to help you level up your game by sharing everything he's
            learned along the way.
          </p>
        </div>
        <img src={spatify9} alt="" />
      </div>
    </div>
  );
};

export default Main;
