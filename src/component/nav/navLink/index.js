import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = ({ id, title, url, active, toggleActive }) => {
  const classname = active === id ? "nav-link active" : "nav-link";
  return (
    <li className="nav-linkWrap">
      <Link className={classname} to={url} onClick={() => toggleActive(id)}>
        {title}
      </Link>
    </li>
  );
};

export default index;
