import React from "react";
import Carousel from "../../carousel";
import { items } from "../../../list/exhibImg";
import TitleWeb from "../../title/titleWeb";
import TitleMobile from "../../title/titleMobile";

const index = () => {
  return (
    <div className="row py-4 mb-4">
      <TitleMobile title="來艋舺瞧事情">
        <Carousel items={items} />
        <dl className="row">
          <dt className="col-sm-4 dt">展覽名稱：</dt>
          <dd className="col-sm-8 dd">來艋舺瞧事情</dd>
          <dt className="col-sm-4 dt">展覽時間：</dt>
          <dd className="col-sm-8 dd">
            <p>2018/07/25-2018/10/24，09:00-18:00</p>
            <p>周二至週日，周一休展</p>
          </dd>
          <dt className="col-sm-4 dt">展覽地點：</dt>
          <dd className="col-sm-8 dd">
            剝皮寮歷史街區163室(廣州街與康定路交叉口)
          </dd>
        </dl>
      </TitleMobile>
      <TitleWeb title="來艋舺瞧事情">
        艋舺是台北最初的發源地，自三百年前台北第一筆交易以來，商界菁英大老調度貿易，販夫走卒兢兢業業打拼，成就了一府二鹿三艋舺的萬世風華傳奇。
        <br />
        <br />
        艋舺底蘊深厚，這次我們想邀請你一同走進艋舺，透過台灣人的古老桌遊「葫蘆運」引路，在日新月異的台北市中，探訪這座耐人尋味的舊城區。
        <br />
        <br />
        「葫蘆運」過去是萬華人年節闔家同樂的傳統活動，風行程度甚比麻將更普及。透過一邊喊著葫蘆運口訣同時手擲骰子前進，擲出剛好的點數抵達終點才能獲勝，低成功率往往讓遊戲場面熱火朝天。
        <br />
        <br />
        葫蘆運上畫有四十七個象徵吉祥的人物、動物、寶器等圖像，四個角落則為戟罄、書畫、玉珮、蕉扇等，分別代表吉慶、祥和、平安、幸福滿滿年味躍然紙上。
        <br />
        <br />
        我們將艋舺的特色融入葫蘆運，重新設計：遍尋龍山寺、龍山文創、青草巷、剝皮寮、青山宮、大理街、東西三水市場、鳥街等八大聚落；拜訪八將面師、青草巷老闆娘、餅舖老闆、製香師傅、金工工坊、魚丸職人、訂製漢服師傅、鸚鵡訓練師等等職人；採集傳承超過三代，總年齡相加超過千歲的老店歷史。
        <br />
        <br />
        就讓「葫蘆運」為你引路，在這個當下橫跨艋舺八大聚落，飽覽大台北繁盛發展的源頭，穿越萬華傳奇的前世今生。
      </TitleWeb>
    </div>
  );
};

export default index;
