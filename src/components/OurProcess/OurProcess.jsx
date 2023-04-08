import React from "react";
import "./OurProcess.css";

import PickMeal from "../../assets/imgs/PickMeal.png";
import CheckOut from "../../assets/imgs/CheckOut.png";
import SitBack from "../../assets/imgs/SitBack.png";

const OurProcess = () => {
  const ourProcess = [
    {
      title: "Pick A Meal Plan",
      icon: PickMeal,
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae nostrum!",
    },
    {
      title: "Ready To Checkout",
      icon: CheckOut,
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae nostrum!",
    },
    {
      title: "Sit Back And Relax",
      icon: SitBack,
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, repudiandae nostrum!",
    },
  ];

  return (
    <div className="our_process py-5">
      <div className="container">
        <p className="our_process_title">Our Process</p>
        <p className="our_process_text">MEALS THAT OUR CUSTOMERS ENJOY</p>

        <div className="d-flex align-items-center justify-content-between gap-4 mt-5 our_process_container">
          {ourProcess.map((item, index) => (
            <div
              key={index}
              className="d-flex shadow-lg justify-content-between flex-column our_process_item align-items-center"
            >
              <p className="our_process_item_title">{item.title}</p>
              <img src={item.icon} alt="" className="w-50" />
              <p className="text-center our_process_item_text">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
