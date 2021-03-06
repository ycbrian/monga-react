import React from "react";
import { Col } from "reactstrap";

const index = ({ children, classname, title, lg }) => {
  return (
    <Col lg={lg}>
      <h4 className={`title--mobile-only ${classname}`}>{title}</h4>
      {children}
    </Col>
  );
};

export default index;
