import React from "react";
import TabLink from "./tabLink";
import { Nav } from "reactstrap";

const index = ({ activeTab, toggle, tabArr }) => {
  return (
    <>
      {/* web tab */}
      <Nav tabs className="native_nav_link nav_tab_l">
        {tabArr.map((item, ind) => (
          <TabLink
            num={`${ind + 1}`}
            title={item}
            activeTab={activeTab}
            toggle={toggle}
          />
        ))}
      </Nav>

      {/* mobile tab */}
      <div className="col-12 nav_tab_m">
        <Nav pills className="flex-column override_nav_link">
          {tabArr.map((item, ind) => (
            <TabLink
              num={`${ind + 1}`}
              title={item}
              activeTab={activeTab}
              toggle={toggle}
            />
          ))}
        </Nav>
      </div>
    </>
  );
};

export default index;
