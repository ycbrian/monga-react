import React from "react";
import logo from "../../img/taipei_activity_logo.png";
import bannerWeb from "../../img/bannerTest.jpg";
// import bannerPhone from "../../img/banner_m.jpg";
import "./style.css";

const index = () => {
  return (
    <>
      <div className="top_logo">
        <img src={logo} alt="bannerLogo" />
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <img
          src={bannerWeb}
          width="100%"
          alt="bannerWeb"
          className="video_container--web-only"
        />
      </div>
      {/* <img
        src={bannerPhone}
        width="100%"
        alt="bannerPhone"
        className="video_container--mobile-only"
      /> */}
    </>
  );
};

export default index;
