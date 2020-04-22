import React from "react";
import "./style.css";

const index = ({ listItem, colflex }) => {
  return (
    <li className={`col-lg-${colflex} events__item-container`}>
      <a
        className="events__item_href a"
        href={listItem.eventUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="events__item">
          <img
            className="events__img"
            src={listItem.photoUrl}
            alt={listItem.name}
          />
          <div className="events__content">
            <h3 className="events__title mb-3">{listItem.name}</h3>
            <p className="events__p events__p--time">
              {listItem.isEnd ? "活動已結束" : listItem.startTime}
            </p>
            <p className="events__p events__p--place">{listItem.address}</p>
          </div>
          <div className="events__footer">
            <img
              className="events__avatar"
              src={listItem.orgPhoto}
              alt={listItem.orgName}
            />
            <p className="events__organizer">{listItem.orgName}</p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default index;
