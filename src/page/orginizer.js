import React, { useState, useEffect } from "react";
import Tab from "../component/tab";
import OrgTabContent from "../component/tabContent/orginizerTabPane";
import { getEvent } from "../dataHandling/dataHandle";

const Orginizer = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [data, setData] = useState(null);
  const tabArr = ["藝文質感", "體驗手作", "街頭美食", "知識講座", "親子同樂"];
  useEffect(() => {
    async function fetchData() {
      let dataList;
      dataList = await getEvent([
        "mongahostart",
        "mongahostexperience",
        "mongahostfood",
        "mongahostlearn",
        "mongahostfamily",
      ]);
      setData(dataList);
    }
    fetchData();
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div className="organizer">
      <Tab activeTab={activeTab} toggle={toggle} tabArr={tabArr} />
      <OrgTabContent activeTab={activeTab} data={data} />
    </div>
  );
};

export default Orginizer;
