import React from "react";
import "./OurFavorites.css";

import HomeSlider1 from "../../assets/imgs/Home_Slider_1.png";
import HomeSlider2 from "../../assets/imgs/Home_Slider_2.png";
import HomeSlider3 from "../../assets/imgs/Home_Slider_3.png";

const OurFavorites = () => {
  const ourFavorites = [
    {
      title: "Pomegranate",
      subTitle: " Glazed Salmon",
      img: HomeSlider1,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "pomegranate pear",
      subTitle: "green salad",
      img: HomeSlider2,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      title: "chef’s signature",
      subTitle: "meal plan",
      img: HomeSlider3,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="our_favorites">
      <div className="container py-5">
        <p className="our_favorites_title">Our Favorites</p>
        <p className="our_favorites_sub_title">
          MEALS THAT OUR CUSTOMERS ENJOY
        </p>
        <div className="d-flex align-items-center justify-content-between gap-4 mt-5 our_favorites_container">
          {ourFavorites.map((item, index) => (
            <div
              key={index}
              className="shadow-lg d-flex flex-column our_favorites_item align-items-center"
            >
              <div>
                <p className="m-0 our_favorites_text fw-bold our_favorites_item_title">
                  {item.title}
                </p>
                <p className="m-0 our_favorites_text fw-bold our_favorites_item_title">
                  {item.subTitle}
                </p>
              </div>

              <img src={item.img} alt="" className="w-75 m-auto " />

              <p className="our_favorites_text">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFavorites;
