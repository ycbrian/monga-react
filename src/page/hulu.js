import React, { useState, useEffect } from "react";
import HuluContent from "../component/hulu/huluContent";
import { getEvent } from "../dataHandling/dataHandle";

const Hulu = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let dataList;
      dataList = await getEvent(["mongahulu"]);
      setData(dataList);
    }
    fetchData();
  }, []);

  return <HuluContent data={data} />;
};

export default Hulu;
