import React from "react";
import "./CartTotal.css";
import { useSelector } from "react-redux";
import { selectTotal } from "../../features/cart/cartSlice";

const CartTotal = () => {
  const totalData = useSelector(selectTotal);
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
              <p className="m-0">${totalData?.toFixed(2)}</p>
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
              >
                Change Address
              </a>
              <div class="collapse" id="collapseExample">
                <div className=" d-flex flex-column gap-2 mt-3">
                  <select class="form-select">
                    <option selected value="Bangladesh">
                      Bangladesh
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                  </select>

                  <select class="form-select">
                    <option selected value="default">
                      Select option...
                    </option>
                    <option value="Bagerhat">Bagerhat</option>
                    <option value="Bandarban">Bandarban</option>
                    <option value="Barguna">Barguna</option>
                    <option value="Bashisal">Bashisal</option>
                  </select>

                  <input
                    class="form-control"
                    type="text"
                    placeholder="Town/City"
                  />
                  <input
                    class="form-control"
                    type="text"
                    placeholder="PostCode/ZIP"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="cart_total_1 d-flex justify-content-between">
            <div className="cart_total_1_left px-3 py-4">
              <p className="m-0">Order Total</p>
            </div>
            <div className="cart_total_1_right px-3 py-4">
              <p className="m-0">${totalData?.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <button className="btn btn-primary py-3 px-3 mt-3 w-25">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
