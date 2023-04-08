import React from "react";
import Products from "../../components/Products/Products";
import TopPage from "../../components/TopPage/TopPage";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <TopPage
        title="Shop"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime incidunt nostrum neque at atque eligendi architecto"
      />

      <Products />
    </div>
  );
};

export default Shop;
