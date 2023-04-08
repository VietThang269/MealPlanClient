import React from "react";
import "./MadeForYou.css";

import ImageHome from "../../assets/imgs/Image_Home_1.png";

const MadeForYou = () => {
  return (
    <div className="container made_for_you position-relative">
      <div className="w-50 m-auto d-flex flex-column align-items-center  made_for_you_container">
        <p className="text-center made_for_you_title">
          Meal Plans <br />
          Made For You
        </p>

        <p className="text-center made_for_you_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          deserunt ab, nesciunt consectetur ad, reiciendis esse amet modi
          laborum perspiciatis voluptatem magnam, quis minus eius nulla eveniet
          fuga maxime necessitatibus.
        </p>

        <button className="btn btn-primary">START YOUR JOURNEY</button>
      </div>

      <img
        src={ImageHome}
        alt=""
        className="position-absolute made_for_you_img1"
      />
      <img
        src={ImageHome}
        alt=""
        className="position-absolute made_for_you_img2"
      />
    </div>
  );
};

export default MadeForYou;
