import React from "react";
import TrafficImgWeb from "../img/traffic/webTrafficImg.png";
import TrafficImgMo from "../img/traffic/moTrafficImg.png";

const traffic = () => {
  return (
    <>
      <img
        className="title--web-only"
        src={TrafficImgWeb}
        alt="traffic Img"
        style={{ width: "100%" }}
      />
      <img
        className="title--mobile-only"
        src={TrafficImgMo}
        alt="traffic Img"
        style={{ width: "100%" }}
      />
    </>
  );
};

export default traffic;
