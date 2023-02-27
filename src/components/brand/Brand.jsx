import React, { Fragment } from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => {
  return (
    <Fragment>
      <div className="gpt3__brand section__padding">
        <div>
          <img src={google} alt="google" />
          <img src={slack} alt="slack" />
          <img src={atlassian} alt="atlassian" />
          <img src={dropbox} alt="dropbox" />
          <img src={shopify} alt="shopify" />
        </div>
      </div>
    </Fragment>
  );
};

export default Brand;
