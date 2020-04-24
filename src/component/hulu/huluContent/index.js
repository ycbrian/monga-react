import React from "react";
import { Row } from "reactstrap";
import TitleWeb from "../../title/titleWeb";
import TitleMobile from "../../title/titleMobile";
import Spinner from "../../spinner";
import EventCard from "../../eventCard";

const index = ({ data }) => {
  return (
    <Row>
      <TitleMobile title="逮丸郎的大富翁" lg="4">
        <ul className="events__list row pl-0">
          {data ? (
            data.length ? (
              data.map((item, ind) => {
                return <EventCard key={ind} listItem={item} colflex="12" />;
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
      </TitleMobile>
      <TitleWeb title="逮丸郎的大富翁" lg="8">
        「葫蘆運」是貫穿整場活動的靈魂，但這個有些陌生的單詞，究竟是何方神聖呢？
        <br />
        <br />
        簡單來說，是「古早味版本的大富翁」。
        以一張涵蓋八仙、生肖等各有意涵的成雙圖形，拼湊成螺旋狀的紙板做為遊戲基礎。相比大富翁的地產建築物，更添喜慶古樸的氣息。
        <br />
        輪流擲出兩顆骰子後，依照規則跳前或倒退，此起彼落呼喊著相應的口訣，把氣氛炒得火熱。
        <br />
        最有趣的是，只有恰好抵達正中心才能獲勝。若擲出點數超過，就得重回螺旋的懷抱裡。超低成功率，讓玩家可以盡情在葫蘆運中廝殺三百回合。
        <br />
        <br />
        僅僅是紙上談兵還不過癮嗎？那本次的升級版「葫蘆運」再適合你不過了！
        <br />
        超大型實境活動「冒險逮丸郎」，橫跨艋舺八大聚落，隱藏著大台北繁盛發展的脈絡，和老台北獨有的熱鬧人情味，邀你一起來體驗真人版「葫蘆運」！
        <br />
        <br />
        遊戲起迄點同為「剝皮寮策展空間」，短短兩小時內完成所有任務後，將於終點領取「葫蘆添好運禮盒」，將艋舺的美好點滴回憶及技藝一併收藏，帶給你一場畢生難忘的旅程。
        <br />
        <br />
      </TitleWeb>
    </Row>
  );
};

export default index;
