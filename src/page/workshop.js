import React, { useEffect, useState } from "react";
import { getEvent } from "../dataHandling/dataHandle";
import WorkshopContent from "../component/workShop/workShopContent";
import WorkshopHead from "../component/workShop/workShopHead";
import workShopImg from "../img/workshop/accupass_blog.jpg";

const Workshop = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let dataList;
      dataList = await getEvent(["mongaworkshop"]);
      setData(dataList);
    }
    fetchData();
  }, []);

  return (
    <>
      <WorkshopHead img={workShopImg} />
      <WorkshopContent data={data} />
    </>
  );
};

export default Workshop;
