import React, { useState, useEffect } from "react";
import { TabPane, Row, Col } from "reactstrap";
import { dataProcessing } from "../../../dataHandling/dataHandle";
import EventCard from "../../eventCard";
import Spinner from "../../spinner";
import "./style.css";

const Index = ({ id, children, title, img, data }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    if (data) {
      const list = dataProcessing(
        data,
        ["mongatoureveryday", "mongatourtempo", "mongatourstreet"],
        id - 1
      );
      setItemList(list);
    }
  }, [data, id]);

  return (
    <TabPane tabId={id}>
      <Row>
        <Col lg="12" className="pr-0 row tab_title">
          <Col lg="6">
            <h4 className="title--mobile-only">{title}</h4>
            <img src={img} className="img-fluid mb-3" alt="head img" />
          </Col>
          <Col lg="6">{children}</Col>
        </Col>
        <Col lg="12" className="row pr-0">
          <Col>
            <ul className="events__list row pl-0">
              {data ? (
                itemList.length ? (
                  itemList.map((item, ind) => {
                    return <EventCard key={ind} listItem={item} colflex="4" />;
                  })
                ) : (
                  <div className="col-12 mb-2">
                    <div className="events__none">分類暫無活動</div>
                  </div>
                )
              ) : (
                <Spinner />
              )}
            </ul>
          </Col>
        </Col>
      </Row>
      <Row></Row>
    </TabPane>
  );
};

export default Index;
