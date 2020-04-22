import React from "react";
import { Row, Col } from "reactstrap";
import EventCard from "../../eventCard";

const index = ({ data }) => {
  return (
    <Row>
      <Col>
        <ul className="events__list row pl-0">
          {data.length ? (
            data.map((item, ind) => {
              return <EventCard key={ind} listItem={item} colflex="4" />;
            })
          ) : (
            <div className="col-12 mb-2">
              <div className="events__none">分類暫無活動</div>
            </div>
          )}
        </ul>
      </Col>
    </Row>
  );
};

export default index;
