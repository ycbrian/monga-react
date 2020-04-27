import React, { useState, useEffect } from "react";
import Tab from "../component/tab";
import TourTabContent from "../component/tabContent/tourTabPane";
import { getEvent } from "../dataHandling/dataHandle";

const Tour = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState(null);
  const tabArr = ["庶民日常", "廟宇信仰", "街友百味"];
  useEffect(() => {
    async function fetchData() {
      let dataList;
      dataList = await getEvent([
        "mongatoureveryday",
        "mongatourtempo",
        "mongatourstreet",
      ]);
      setData(dataList);
    }
    fetchData();
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="tour">
      <Tab activeTab={activeTab} toggle={toggle} tabArr={tabArr} />
      <TourTabContent activeTab={activeTab} data={data} />
    </div>
  );
};

export default Tour;
