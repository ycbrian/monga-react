import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav-fill w-100 align-items-star">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              巷弄底底弄
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/workshop">
              手藝轉乾坤
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/exhibition">
              來艋舺瞧事情
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/hulu">
              冒險逮丸郎
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/organizer">
              主辦引流
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/traffic">
              交通資訊
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default index;
