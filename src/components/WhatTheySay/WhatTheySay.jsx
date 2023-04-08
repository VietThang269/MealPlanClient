import React from "react";
import "./WhatTheySay.css";
import Avatar from "../../assets/imgs/Avatar.png";

const WhatTheySay = () => {
  const theySay = [
    {
      img: Avatar,
      name: "ANNA LUCAS",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae at illo earum delectus vero nulla odit magnam modi",
    },
    {
      img: Avatar,
      name: "ANNA LUCAS",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae at illo earum delectus vero nulla odit magnam modi",
    },
    {
      img: Avatar,
      name: "ANNA LUCAS",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae at illo earum delectus vero nulla odit magnam modi",
    },
  ];

  return (
    <div className="what_say py-5">
      <div className="container">
        <p className="what_say_title">What They Say</p>

        <div className="d-flex justify-content-between align-items-center gap-5 what_say_container">
          {theySay.map((item, index) => (
            <div className="d-flex flex-column align-items-center gap-3">
              <img src={item.img} alt="" className="w-25" />

              <p className="text-center what_say_name">{item.name}</p>
              <p className="text-center what_say_text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatTheySay;
