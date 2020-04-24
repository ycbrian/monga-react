import React from "react";
import { Row } from "reactstrap";
import TitleMobile from "../../title/titleMobile";
import TitleWeb from "../../title/titleWeb";

const index = ({ img }) => {
  return (
    <Row className="py-4 mb-2">
      <TitleMobile title="艋舺百年職人系列專訪" classname="mb-3" lg="6">
        <img
          src={img}
          alt="艋舺百年職人系列專訪"
          className="img-fluid float-left mb-3"
        />
      </TitleMobile>
      <TitleWeb title="艋舺百年職人系列專訪" classname="mb-3" lg="6">
        <br />
        「一府二路三艋舺」，萬華技藝傳承百年，造就台北府城當年盛世。
        <br />
        <br />
        白駒過隙，日月流轉，多少的政權更替，有一批人依然堅持著傳統的手藝，精益、傳承。
        <br />
        <br />
        此次我們逐一拜訪青山宮八將面師、青草巷調香師、餅舖老闆、製香師傅、金工工匠、魚丸職人、訂製漢服師傅、鸚鵡訓練師等百年職人，採集傳承超過三代，總年齡相加超過千歲的老店歷史，透過他們的動人故事，一起揭開萬華古城的百年神秘面紗⋯⋯
        <br />
        <br />
        <a
          href="http://blog.accupass.com/category/monga"
          className="btn btn-outline-secondary btn-block mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          點我傳送到艋舺
        </a>
      </TitleWeb>
      <hr />
    </Row>
  );
};

export default index;
