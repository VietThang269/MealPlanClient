import React, { useRef, useState } from "react";
import "./CartTotal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetData,
  selectListCard,
  selectTotal,
} from "../../features/cart/cartSlice";
import { apiPost, apiPut } from "../../utils/https/request";
import { toast } from "react-toastify";

const CartTotal = () => {
  const totalData = useSelector(selectTotal);
  const listData = useSelector(selectListCard);
  const { id, cartId } = JSON.parse(localStorage.getItem("id"));

  const [address, setAddress] = useState("");

  const inputRef = useRef();
  const dispatch = useDispatch();

  async function hanldeCheckout() {
    if (address.length <= 0) {
      toast("Hãy điền địa chỉ !", { type: "error" });
      inputRef.current.focus();
      return;
    }
    try {
      const response = await apiPost(
        "order",
        {
          address,
          total: totalData,
          list: listData,
          userId: id,
          status: "pending",
        },
        {}
      );

      if (response.error === 0) {
        toast("Đơn hàng của bạn đã được xác nhận !", { type: "success" });
        dispatch(resetData());
        // Clear cart in db
        try {
          const response = await apiPut(`cart/${cartId}`, [], {});
        } catch (error) {
          toast("Có lỗi xảy ra !", { type: "error" });
        }
      }
    } catch (error) {
      toast("Có lỗi xảy ra !", { type: "error" });
    }
  }

  return (
    <div className="cart_total d-flex justify-content-end mt-5">
      <div>
        <p className="cart_total_title">Cart Totals</p>

        <div>
          <div className="cart_total_1 d-flex justify-content-between">
            <div className="cart_total_1_left px-3 py-4">
              <p className="m-0">Cart Subtotal</p>
            </div>
            <div className="cart_total_1_right px-3 py-4">
              <p className="m-0">${totalData}</p>
            </div>
          </div>

          <div className="cart_total_1 d-flex justify-content-between">
            <div className="cart_total_1_left px-3 py-4">
              <p className="m-0">Shipping and Handling</p>
            </div>
            <div className="cart_total_1_right px-3 py-4">
              <div className="d-flex flex-column">
                <div className="d-flex gap-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Free Shipping
                  </label>
                </div>
                <div className="d-flex gap-2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Flat Rate
                  </label>
                </div>
              </div>

              <p>Shipping options will be updated during checkout.</p>
              <a
                data-bs-toggle="collapse"
                href="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                className="change_address"
                onClick={() => {
                  setAddress("");
                  inputRef.current.focus();
                }}
              >
                Change Address
              </a>
              <div className=" d-flex flex-column gap-2 mt-3">
                <input
                  ref={inputRef}
                  class="form-control"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address..."
                />
              </div>
            </div>
          </div>

          <div className="cart_total_1 d-flex justify-content-between">
            <div className="cart_total_1_left px-3 py-4">
              <p className="m-0">Order Total</p>
            </div>
            <div className="cart_total_1_right px-3 py-4">
              <p className="m-0">${totalData}</p>
            </div>
          </div>
        </div>

        <button
          className="btn btn-primary py-3 px-3 mt-3 w-25"
          onClick={() => hanldeCheckout()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
