import React, { useEffect } from "react";
import "./Products.css";

import Image from "../../assets/imgs/Home_Slider_1.png";
import IconAddProduct from "../../assets/icons/IconAddProduct";
import IconStarFill from "../../assets/icons/IconStarFill";
import IconStar from "../../assets/icons/IconStar";
import IconNextNav from "../../assets/icons/IconNextNav";

import { useDispatch, useSelector } from "react-redux";
import {
  requestGetProducts,
  selectDataProduct,
} from "../../features/product/productSlice";
import { selectIsLogin } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { apiPut } from "../../utils/https/request";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDataProduct);
  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    dispatch(requestGetProducts());
  }, [dispatch]);

  async function handleAddToCart(data) {
    if (!isLogin) {
      toast("Bạn cần phải đăng nhập !", { type: "error" });
      return;
    }

    // Serverr
    const { _id, price } = data;
    const { cartId } = JSON.parse(localStorage.getItem("id"));

    console.log(cartId);
    try {
      const response = await apiPut(
        "cart/add",
        {
          id: cartId,
          productId: _id,
          price,
          quanity: 1,
        },
        {}
      );

      if (response.error === 0) {
        toast("Thêm vào giỏ hàng thành công", { type: "success" });
      }
    } catch (error) {}

    console.log(data);
    // Client
  }

  return (
    <div className="container py-5 d-flex align-items-center flex-column">
      <div className="product_sorting d-flex justify-content-between align-items-center w-100 gap-3">
        <p>Showing 1-12 of 16 results</p>

        <select name="sort" id="shop-sort">
          <option value="">Default sorting</option>
          <option value="">Sort by popularity</option>
          <option value="">Sort by average rating</option>
          <option value="">Sort by latest</option>
          <option value="">Sort by price: low to high</option>
          <option value="">Sort by price: high to low</option>
        </select>
      </div>

      <div className="d-flex product_list flex-wrap justify-content-evenly gap-5">
        {data?.map((item, index) => (
          <div
            key={index}
            className="product_item d-flex flex-column gap-3 align-items-center"
          >
            <img src={item?.image} alt="" className="w-100" />
            <div className="product_item_star">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStar />
            </div>
            <p className="product_item_title fw-bold m-0">{item?.name}</p>
            <p className="product_item_price fw-bold m-0 d-flex align-items-center gap-2">
              ${item?.price}{" "}
              <span className="product_item_sale">
                $
                {((item?.discount / 100) * item?.price + item?.price).toFixed(
                  2
                )}
              </span>
            </p>

            <div
              className="product_item_add d-flex align-items-center justify-content-center"
              onClick={() => handleAddToCart(item)}
            >
              <IconAddProduct />
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex gap-2 mt-3">
        <button className="btn btn-primary">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">
          <IconNextNav />
        </button>
      </div>
    </div>
  );
};

export default Products;
