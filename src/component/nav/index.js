import React, { useState } from "react";
import "./style.css";

import NavLink from "./navLink";

const Index = () => {
  const [active, setActive] = useState(0);

  const toggleActive = (id) => {
    setActive(id);
  };

  const linkArr = [
    { title: "巷弄底底弄", url: "/" },
    { title: "手藝轉乾坤", url: "/workshop" },
    { title: "來艋舺瞧事情", url: "/exhibition" },
    { title: "冒險逮丸郎", url: "/hulu" },
    { title: "主辦引流", url: "/organizer" },
    { title: "交通資訊", url: "/traffic" },
  ];
  return (
    <ul className="nav-linkList">
      {linkArr.map((item, ind) => {
        return (
          <NavLink
            id={ind}
            title={item.title}
            url={item.url}
            active={active}
            toggleActive={toggleActive}
          />
        );
      })}
    </ul>
  );
};

export default Index;
