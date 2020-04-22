import React from "react";
import { TabContent } from "reactstrap";
import TabPane from "./tabPane";
import tabHeadImg1 from "../../img/roadmap/tour_everyday.png";
import tabHeadImg2 from "../../img/roadmap/tour_tempo.png";
import tabHeadImg3 from "../../img/roadmap/tour_street.png";

const index = ({ activeTab, data }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane id="1" title="庶民日常" img={tabHeadImg1} data={data}>
        <h4 className="title--web-only">庶民日常</h4>
        <p className="p--preline">
          <br />
          「來到艋舺，不曉得你是否也覺得老店特別多呢？」
          <br />
          <br />
          這原因其實很簡單，艋舺這地方的發展已經有三百年的歷史，是台北市最早開發的地方，因此這裡的產業，也透露出在地居民過往的生活習慣。
          <br />
          <br />
          本條導覽路線，將帶領大家尋訪在地的特色老店，並且透過食物，和大家分享店家的小故事，這次不只是要吃食物的味道，更要吃到在地的故事。
        </p>
      </TabPane>
      <TabPane id="2" title="廟宇信仰" img={tabHeadImg2} data={data}>
        <h4 className="title--web-only">廟宇信仰</h4>
        <p className="p--preline">
          <br />
          艋舺發展至今已經有300多年的歷史，是台北市最老、也是最能展現台北傳統生活文化的街區之一。
          <br />
          <br />
          這回我們將透過導覽的方式，透過走訪上百年歷史的宗教建築，一睹萬華的艋舺三大廟和艋舺教會，認識地方信仰故事！
        </p>
      </TabPane>
      <TabPane id="3" title="街友百味" img={tabHeadImg3} data={data}>
        <h4 className="title--web-only">街友百味</h4>
        <p className="p--preline">
          <br />
          艋舺是社群網絡連結性極強的地區，有著自己人要互相照顧的滿滿的個性。發展至今，作為台北慈善機構的中心已有超過150年以上的歷史，像是台北仁濟院前身的組織，就是在萬華一帶設立。
          <br />
          <br />
          也是這樣的民情，人們總說萬華的土會黏人。街頭無家者因此長住在萬華，甚至有能力租屋後也留在萬華租屋，因為這裡有他們的一片棲身之地。
          <br />
          <br />
          跟著嚮導阿強，除了帶你看遍艋舺的歷史古蹟，還要帶你一覽繁華城市背後的人生百態。
        </p>
        <p style={{ fontSize: "1.25rem", paddingTop: "30px" }}>
          備註：適合參加年齡 - 12歲以上
        </p>
      </TabPane>
    </TabContent>
  );
};

export default index;
