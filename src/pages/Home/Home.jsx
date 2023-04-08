import React from "react";
import HomeStart from "../../components/HomeStart/HomeStart";
import MadeForYou from "../../components/MadeForYou/MadeForYou";
import MealLove from "../../components/MealLove/MealLove";
import OurFavorites from "../../components/OurFavorites/OurFavorites";
import OurProcess from "../../components/OurProcess/OurProcess";
import RecipesBottom from "../../components/RecipesBottom/RecipesBottom";
import RecipesTop from "../../components/RecipesTop/RecipesTop";
import WhatTheySay from "../../components/WhatTheySay/WhatTheySay";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--secondary1)",
        overflow: "hidden",
      }}
      className="position-relative"
    >
      <HomeStart />
      <OurFavorites />
      <RecipesTop />
      <RecipesBottom />
      <OurProcess />
      <MealLove />
      <WhatTheySay />
      <MadeForYou />
    </div>
  );
};

export default Home;
