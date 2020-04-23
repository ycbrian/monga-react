import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const Carousel = ({ items }) => {
  return <UncontrolledCarousel className="mb-4" items={items} />;
};

export default Carousel;
