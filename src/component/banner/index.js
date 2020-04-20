import React from "react";
import logo from "../../img/taipei_activity_logo.png";
import bannerWeb from "../../img/banner.gif";
import bannerPhone from "../../img/banner_m.gif";
import "./style.css";

const index = () => {
  return (
    <>
      <div className="top_logo">
        <img src={logo} />
      </div>
      <img
        src={bannerWeb}
        width="100%"
        alt="bannerWeb"
        className="video_container--web-only"
      />
      <img
        src={bannerPhone}
        width="100%"
        alt="bannerPhone"
        className="video_container--mobile-only"
      />
    </>
  );
};

export default index;
