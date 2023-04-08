import React from "react";
import "./MealLove.css";

import MealImage from "../../assets/imgs/Image_Home_1.png";

const MealLove = () => {
  return (
    <div className="position-relative">
      <div className="container d-flex align-items-center py-5 meal_love_container gap-5">
        <div className="meal_love_left">
          <p className="meal_love_title">
            Meal Plans <br /> You Love
          </p>
          <p className="meal_love_desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem error, nobis, magni est nemo labore ab consectetur
            minima alias delectus, illum inventore culpa? Neque, culpa error
            minima quod fugit quia.
          </p>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-primary">START YOUR JOURNEY</button>
            <button className="btn btn-primary outline">LEARN MORE</button>
          </div>
        </div>

        <div className="meal_love_right">
          <img src={MealImage} alt="" className="w-100" />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default MealLove;
