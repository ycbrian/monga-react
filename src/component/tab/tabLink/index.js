import React from "react";
import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const index = ({ num, title, activeTab, toggle }) => {
  return (
    <NavItem>
      <NavLink
        className={
          classnames({ active: activeTab === num }) +
          ` nav_link_${Number(num) - 1}`
        }
        onClick={() => {
          toggle(num);
        }}
      >
        {title}
      </NavLink>
    </NavItem>
  );
};

export default index;
