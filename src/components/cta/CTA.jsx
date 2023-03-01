import React, { Fragment } from "react";
import "./cta.css";

const CTA = () => {
  return (
    <Fragment>
      <div className="gpt3__cta">
        <div className="gpt3__cta-content">
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className="gpt3__cta-btn">
          <button type="button">Get Started</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CTA;
