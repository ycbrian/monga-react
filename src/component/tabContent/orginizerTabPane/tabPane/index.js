import React, { useState, useEffect } from "react";
import { TabPane, Row, Col } from "reactstrap";
import { dataProcessing } from "../../../../dataHandling/dataHandle";
import EventCard from "../../../eventCard";
import Spinner from "../../../spinner";

const Index = ({ title, id, data }) => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    if (data) {
      const list = dataProcessing(
        data,
        [
          "mongahostart",
          "mongahostexperience",
          "mongahostfood",
          "mongahostlearn",
          "mongahostfamily",
        ],
        id - 1
      );
      setItemList(list);
    }
  }, [data, id]);

  return (
    <TabPane tabId={id}>
      <Row>
        <Col lg="12" className="mb-2 tab_title">
          <h3>{title}</h3>
        </Col>
        <Col lg="12" className="pr-0">
          <ul className="events__list row pl-0">
            {data ? (
              itemList.length ? (
                itemList.map((item, ind) => {
                  return <EventCard key={ind} listItem={item} colflex="3" />;
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
      </Row>
    </TabPane>
  );
};

export default Index;
