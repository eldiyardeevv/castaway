import React from "react";

const Input = () => {
  return (
    <div className="container">
      <div className="Input">
        <div className="block">
          <p className="input-text">Email Newsletter</p>
          <h3 className="input-h3">Subscribe for updates</h3>
        </div>
        <div className="input-block">
          <div>
            <input className="inp1" type="text" placeholder="Name" />
          </div>
          <div>
            <input className="inp2" type="email" placeholder="Email" />
          </div>
          <button className="input-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
