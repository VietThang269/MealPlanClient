import React from "react";
import "./HomeSlider.css";

import HomeSlider1 from "../../assets/imgs/Home_Slider_1.png";
import HomeSlider2 from "../../assets/imgs/Home_Slider_2.png";
import HomeSlider3 from "../../assets/imgs/Home_Slider_3.png";
import HomeSlider4 from "../../assets/imgs/Home_Slider_4.png";

const HomeSlider = () => {
  const sliders = [
    {
      img: HomeSlider1,
      title: "Pomegranate",
      des: "Glazed Salmon",
    },
    {
      img: HomeSlider2,
      title: "Pomegranate Pear",
      des: "Green Salad",
    },
    {
      img: HomeSlider3,
      title: "Chef’s Signature",
      des: "Meal Plan",
    },
    {
      img: HomeSlider4,
      title: "Pomegranate Pear",
      des: "Green Salad w/ Dressing",
    },
  ];

  return (
    <div className="position-absolute home_slider d-flex align-items-center gap-3">
      <div>
        <p className="home_slider_title m-0">MEAL OPTIONS</p>
      </div>

      <div className="d-flex gap-3">
        {sliders.map((item, index) => (
          <div key={index} className="d-flex flex-column home_slider_item">
            <img src={item.img} alt="" className="home_slider_img" />

            <div className="">
              <p
                className="m-0"
                style={{
                  fontSize: 12,
                }}
              >
                {item.title}
              </p>
              <p
                className="m-0"
                style={{
                  fontSize: 12,
                }}
              >
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
