import React from "react";
import logo from "../../img/taipei_activity_logo.png";
import bannerWeb from "../../img/bannerTest.jpg";
import "./style.css";

const index = () => {
  return (
    <>
      <div className="top_logo">
        <img src={logo} alt="bannerLogo" />
      </div>
      <img
        src={bannerWeb}
        width="100%"
        alt="bannerWeb"
        className="video_container--web-only"
      />
    </>
  );
};

export default index;
