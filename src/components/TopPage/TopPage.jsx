import React from "react";
import "./TopPage.css";

import ImageBanner from "../../assets/imgs/ImageBanner.png";

const TopPage = ({ title, desc }) => {
  return (
    <div className="banner py-4">
      <div className="container d-flex align-items-center justify-content-between banner_container">
        <div className="banner_left d-flex flex-column">
          <p className="banner_left_title">{title}</p>
          <p className="banner_left_text">{desc}</p>
        </div>

        <div className="banner_right">
          <img src={ImageBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopPage;
