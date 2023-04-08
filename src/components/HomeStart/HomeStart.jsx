import React from "react";
import "./HomeStart.css";

import ImageHome1 from "../../assets/imgs/Image_Home_1.png";
import HomeSlider from "../HomeSlider/HomeSlider";

const HomeStart = () => {
  return (
    <>
      <div className="container d-flex gap-4 position-relative home_start">
        <div className="home_start_left my-5">
          <img src={ImageHome1} alt="" className="w-100" />

          <p className="home_start_text fw-bold">
            SMOKED MILKFISH GARDEN SALAD
          </p>
          <p className="home_start_text w-75 m-auto">
            Includes: Vegetable Lasagna, Fresh Fruit Platter, Fresh Lemon Juice,
            and Creme Brulee
          </p>
        </div>

        <div className="home_start_right my-5 py-5">
          <h1 className="home_start_title fw-bold">
            Worry-Free <br /> Meal Plans.
          </h1>

          <div className="d-flex gap-3 mt-3">
            <button className="btn btn-primary">START YOUR JOURNEY</button>
            <button className="btn btn-primary outline">LEARN MORE</button>
          </div>
        </div>
      </div>
      <HomeSlider />
    </>
  );
};

export default HomeStart;
