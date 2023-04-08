import React from "react";
import "./RecipesTop.css";

import Recipes1 from "../../assets/imgs/Recipes_1.png";
import RecipesItem from "../RecipesItem/RecipesItem";

import Recipes2 from "../../assets/imgs/Recipes_2.png";

const RecipesTop = () => {
  return (
    <div className="container d-flex align-items-center py-5 gap-5 recipes_top">
      <div className="recipes_top_left">
        <img src={Recipes1} alt="" className="w-100" />
      </div>

      <div className="recipes_top_right">
        <p className="recipes_top_text fw-bold">SMOKED MILKFISH GARDEN SALAD</p>
        <p className="recipes_top_title">
          April 2021 <br />
          Meal Plans
        </p>

        <p className="recipes_top_text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto illum
          nisi saepe id itaque nesciunt delectus quisquam, quae veritatis
          molestias veniam expedita nemo, eligendi quasi, eaque suscipit.
          Explicabo, nihil perspiciatis.
        </p>
        <div className="d-flex justify-content-between align-items-center mt-5 gap-5 recipes_top_container">
          <RecipesItem />
          <RecipesItem />
        </div>
      </div>
    </div>
  );
};

export default RecipesTop;
