import React from "react";
import { Col } from "reactstrap";

const index = ({ children, title, classname, lg }) => {
  return (
    <Col lg={lg}>
      <h4 className={`title--web-only ${classname}`}>{title}</h4>
      <p className="p--preline">{children}</p>
    </Col>
  );
};

export default index;
