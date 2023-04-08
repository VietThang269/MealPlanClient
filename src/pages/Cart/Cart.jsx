import React, { useEffect } from "react";
import TopPage from "../../components/TopPage/TopPage";
import "./Cart.css";

import CartItem from "../../components/CartItem/CartItem";
import CartTotal from "../../components/CartTotal/CartTotal";

import { useDispatch, useSelector } from "react-redux";
import { requestGetCart, selectListCard } from "../../features/cart/cartSlice";
import { selectId } from "../../features/user/userSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const listCart = useSelector(selectListCard);
  const idUser = useSelector(selectId);

  useEffect(() => {
    if (idUser !== "") {
      dispatch(requestGetCart({ userId: idUser || "0" }));
    }
  }, [dispatch, idUser]);

  return (
    <div className="cart">
      <TopPage
        title="Cart"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime incidunt nostrum neque at atque eligendi architecto"
      />

      <div className="container py-5">
        <div className="cart_top px-3 py-3">
          <p className="m-0">Shipping costs updated</p>
        </div>

        <div className="cart_container">
          <div className="cart_header d-flex align-items-center justify-content-between py-4 px-3 mt-4">
            <div className="cart_header_item">
              <p className="m-0 fw-bold">Image</p>
            </div>
            <div className="cart_header_item">
              <p className="m-0 fw-bold">Product Name</p>
            </div>
            <div className="cart_header_item">
              <p className="m-0 fw-bold">Pirce</p>
            </div>
            <div className="cart_header_item">
              <p className="m-0 fw-bold">Quantity</p>
            </div>
            <div className="cart_header_item">
              <p className="m-0 fw-bold">Total</p>
            </div>
            <div className="cart_header_item">
              <p className="m-0 fw-bold">Remove</p>
            </div>
          </div>

          <div className="cart_items d-flex flex-column">
            {listCart?.map((item, index) => (
              <CartItem
                key={index}
                id={item.id}
                quanity={item.quanity}
                price={item.price}
              />
            ))}

            <div className="cart_item px-5 d-flex justify-content-between align-items-center py-3 gap-4">
              <div className="d-flex gap-3 align-items-center column_mobile">
                <input
                  type="text"
                  placeholder="Coupon Code..."
                  className="input_coupons px-3 py-2"
                />
                <button className="btn btn-primary2">APPLY COUPON</button>
              </div>

              <div className="d-flex gap-3 align-items-center column_mobile">
                <button className="btn btn-primary2">UPDATE CART</button>
                <button className="btn btn-primary2">CONTINUE SHOPPING</button>
              </div>
            </div>
          </div>

          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
