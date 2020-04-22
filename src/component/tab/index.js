import React from "react";
import TabLink from "./tabLink";
import { Nav } from "reactstrap";

const index = ({ activeTab, toggle }) => {
  return (
    <>
      {/* web tab */}
      <Nav tabs className="native_nav_link nav_tab_l">
        <TabLink
          num="1"
          title="庶民日常"
          activeTab={activeTab}
          toggle={toggle}
        />
        <TabLink
          num="2"
          title="廟宇信仰"
          activeTab={activeTab}
          toggle={toggle}
        />
        <TabLink
          num="3"
          title="街友百味"
          activeTab={activeTab}
          toggle={toggle}
        />
      </Nav>

      {/* mobile tab */}
      <div className="col-12 nav_tab_m">
        <Nav pills className="flex-column override_nav_link">
          <TabLink
            num="1"
            title="庶民日常"
            activeTab={activeTab}
            toggle={toggle}
          />
          <TabLink
            num="2"
            title="廟宇信仰"
            activeTab={activeTab}
            toggle={toggle}
          />
          <TabLink
            num="3"
            title="街友百味"
            activeTab={activeTab}
            toggle={toggle}
          />
        </Nav>
      </div>
    </>
  );
};

export default index;
