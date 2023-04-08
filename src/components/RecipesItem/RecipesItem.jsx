import React from "react";
import "./RecipesItem.css";

import Recipes2 from "../../assets/imgs/Recipes_2.png";

const RecipesItem = () => {
  return (
    <div className="position-relative">
      <img src={Recipes2} alt="" className="w-100" />
      <button className="btn btn-primary btn-recipes">ORDER NOW</button>
    </div>
  );
};

export default RecipesItem;
