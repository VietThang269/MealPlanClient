import React, { useEffect, useState } from "react";
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

import { setChange } from "../../features/cart/cartSlice.js";
import { selectIsLogin } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { apiPut } from "../../utils/https/request";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    border: "none",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDataProduct);
  const isLogin = useSelector(selectIsLogin);
  const [opened, setOpened] = useState(false);

  const [item, setItem] = useState();

  useEffect(() => {
    dispatch(requestGetProducts());
  }, [dispatch]);

  function hanldeOpenModal(id) {
    const response = data.find((item, index) => item._id === id);
    setOpened(true);
    setItem(response);
  }

  console.log(data);
  async function handleAddToCart(data) {
    if (!isLogin) {
      toast("Bạn cần phải đăng nhập !", { type: "error" });
      return;
    }

    // Serverr
    const { _id, price } = data;
    const { cartId } = JSON.parse(localStorage.getItem("id"));

    try {
      const response = await apiPut(
        `cart/add/${cartId}`,
        {
          productId: _id,
          price,
          quanity: 1,
        },
        {}
      );

      if (response.error === 0) {
        dispatch(setChange());
        toast("Thêm vào giỏ hàng thành công", { type: "success" });
      }
    } catch (error) {
      toast("Có lỗi xảy ra !", { type: "error" });
    }

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
            <img
              src={item?.image}
              alt=""
              className="w-100"
              style={{
                cursor: "pointer",
              }}
              onClick={() => hanldeOpenModal(item._id)}
            />
            <div className="product_item_star">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
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

        <Modal
          isOpen={opened}
          onRequestClose={() => setOpened(false)}
          style={customStyles}
        >
          <div className="modal_product" style={{}}>
            <div
              style={{
                flex: 1,
              }}
            >
              <img
                src={item?.image}
                alt=""
                className="w-100 image_product"
                style={{
                  cursor: "pointer",
                }}
              />
            </div>

            <div
              style={{
                flex: 2,
              }}
            >
              <p style={{}} className="fw-bold">
                {item?.name}
              </p>
              <p style={{}}>$ {item?.price}</p>
              <p style={{}}>{item?.description}</p>
              <p style={{}} className="fw-bold">
                Category: {(item?.category || []).join(" & ")}
              </p>
              <p style={{}} className="fw-bold">
                Component: {(item?.component || []).join(" & ")}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Products;
