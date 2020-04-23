import React, { useState, useEffect } from "react";
import Tab from "../component/tab";
import TabContent from "../component/tabContent";
import { getEvent } from "../dataHandling/dataHandle";

const Tour = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState(null);
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
    <>
      <Tab activeTab={activeTab} toggle={toggle} />
      <TabContent activeTab={activeTab} data={data} />
    </>
  );
};

export default Tour;
