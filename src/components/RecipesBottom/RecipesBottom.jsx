import React from "react";
import "./RecipesBottom.css";

import Recipes1 from "../../assets/imgs/Recipes_1.png";
import RecipesItem from "../RecipesItem/RecipesItem";

const RecipesBottom = () => {
  return (
    <div className="container d-flex align-items-center py-5 gap-5 justify-content-between recipes_bottom">
      <div className="recipes_bottom_left">
        <p className="recipes_bottom_text fw-bold">
          SMOKED MILKFISH GARDEN SALAD
        </p>
        <p className="recipes_bottom_title">Recipes</p>

        <div className="d-flex justify-content-between align-items-center mt-5 gap-5">
          <RecipesItem />
          <RecipesItem />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5 gap-5">
          <RecipesItem />
          <RecipesItem />
        </div>
      </div>

      <div className="recipes_bottom_right">
        <img src={Recipes1} alt="" className="w-100" />
      </div>
    </div>
  );
};

export default RecipesBottom;
