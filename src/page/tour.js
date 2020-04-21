import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import tabHeadImg1 from "../img/roadmap/tour_everyday.png";
import tabHeadImg2 from "../img/roadmap/tour_tempo.png";
import tabHeadImg3 from "../img/roadmap/tour_street.png";

const Tour = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      {/* web tab */}
      <Nav tabs id="myTab" className="native_nav_link nav_tab_l">
        <NavItem>
          <NavLink
            className={
              classnames({ active: activeTab === "1" }) + " nav_link_0"
            }
            onClick={() => {
              toggle("1");
            }}
          >
            庶民日常
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={
              classnames({ active: activeTab === "2" }) + " nav_link_1"
            }
            onClick={() => {
              toggle("2");
            }}
          >
            廟宇信仰
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={
              classnames({ active: activeTab === "3" }) + " nav_link_2"
            }
            onClick={() => {
              toggle("3");
            }}
          >
            街友百味
          </NavLink>
        </NavItem>
      </Nav>

      {/* mobile tab */}
      <div className="col-12 nav_tab_m">
        <Nav pills id="v-pills-tab" className="flex-column override_nav_link">
          <NavItem className="nav_link_0">
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              庶民日常
            </NavLink>
          </NavItem>
          <NavItem className="nav_link_1">
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              廟宇信仰
            </NavLink>
          </NavItem>
          <NavItem className="nav_link_2">
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              街友百味
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      {/* -----content---- */}

      <TabContent activeTab={activeTab} id="myTabContent">
        <TabPane tabId="1" id="home">
          <Row>
            <Col lg="12" className="pr-0 row tab_title">
              <Col lg="6">
                <h4 className="title--mobile-only">庶民日常</h4>
                <img src={tabHeadImg1} className="img-fluid mb-3" />
              </Col>
              <Col lg="6">
                <h4 className="title--web-only">庶民日常</h4>
                <p className="p--preline">
                  「來到艋舺，不曉得你是否也覺得老店特別多呢？」
                  <br />
                  <br />
                  這原因其實很簡單，艋舺這地方的發展已經有三百年的歷史，是台北市最早開發的地方，因此這裡的產業，也透露出在地居民過往的生活習慣。
                  <br />
                  <br />
                  本條導覽路線，將帶領大家尋訪在地的特色老店，並且透過食物，和大家分享店家的小故事，這次不只是要吃食物的味道，更要吃到在地的故事。
                </p>
              </Col>
            </Col>
            <Col lg="12" className="row pr-0">
              <Col>
                <ul className="events__list row pl-0" id="events__list_0">
                  {/* insert data */}
                </ul>
              </Col>
            </Col>
          </Row>
          <Row></Row>
        </TabPane>
        <TabPane tabId="2" id="profile">
          <Row>
            <Col lg="12" className="pr-0 row tab_title">
              <Col lg="6">
                <h4 className="title--mobile-only">廟宇信仰</h4>
                <img src={tabHeadImg2} className="img-fluid mb-3" />
              </Col>
              <Col lg="6">
                <h4 className="title--web-only">廟宇信仰</h4>
                <p className="p--preline">
                  艋舺發展至今已經有300多年的歷史，是台北市最老、也是最能展現台北傳統生活文化的街區之一。
                  <br />
                  <br />
                  這回我們將透過導覽的方式，透過走訪上百年歷史的宗教建築，一睹萬華的艋舺三大廟和艋舺教會，認識地方信仰故事！
                </p>
              </Col>
            </Col>
            <Col lg="12" className="row pr-0">
              <Col>
                <ul className="events__list row pl-0" id="events__list_1">
                  {/* insert data */}
                </ul>
              </Col>
            </Col>
          </Row>
          <Row></Row>
        </TabPane>
        <TabPane tabId="3" id="contact">
          <Row>
            <Col lg="12" className="pr-0 row tab_title">
              <Col lg="6">
                <h4 className="title--mobile-only">街友百味</h4>
                <img src={tabHeadImg3} className="img-fluid mb-3" />
              </Col>
              <Col lg="6">
                <h4 className="title--web-only">街友百味</h4>
                <p className="p--preline">
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
              </Col>
            </Col>
            <Col lg="12" className="row pr-0">
              <Col>
                <ul className="events__list row pl-0" id="events__list_2">
                  {/* insert data */}
                </ul>
              </Col>
            </Col>
          </Row>
          <Row></Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tour;
