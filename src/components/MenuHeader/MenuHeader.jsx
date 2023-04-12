import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconCart from "../../assets/icons/IconCart";
import IconHamburger from "../../assets/icons/IconHamburger";
import IconSearch from "../../assets/icons/IconSearch";
import AvatarLogin from "../../assets/imgs/avatar_login.png";

import Modal from "react-modal";
import { useForm } from "react-hook-form";

import IconClose from "../../assets/icons/IconClose";
import "./MenuHeader.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectId, selectIsLogin } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import {
  requestGetCart,
  selectListCard,
  selectIsChange,
} from "../../features/cart/cartSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    border: "none",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const MenuHeader = ({ open, setOpen }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isResgister, setRegister] = React.useState(false);
  const isLogin = useSelector(selectIsLogin);
  const [data, setData] = React.useState(0);

  const [openMenu, setOpenMenu] = React.useState(false);

  const dispatch = useDispatch();

  const isChange = useSelector(selectIsChange);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const navigate = useNavigate();

  function hanldeLogout() {
    dispatch(logOut());
    toast("Đăng xuất thành công !", { type: "success" });
    setOpenMenu(false);
  }

  const listCart = useSelector(selectListCard);
  const idUser = useSelector(selectId);

  useEffect(() => {
    if (idUser !== "") {
      dispatch(requestGetCart({ userId: idUser || "0" }));
    }
  }, [dispatch, idUser, isChange]);

  useEffect(() => {
    if (listCart.length > 0) {
      const listTotal = listCart?.map((item, _) => item.quanity);
      const total = listTotal?.reduce((a, b) => a + b);
      setData(total);
    }
  }, [listCart]);

  return (
    <div className="d-flex menu_header gap-4 align-items-center">
      <button type="button" class="btn btn-primary btn_menu_header">
        Order Your Meal
      </button>
      <IconSearch />

      <div
        onClick={() => navigate("/cart")}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <IconCart />

        <div
          style={{
            content: "",
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "red",
            width: 15,
            height: 15,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 12,
          }}
        >
          {data}
        </div>
      </div>

      {isLogin ? (
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            onClick={() => setOpenMenu(!openMenu)}
            src={AvatarLogin}
            alt=""
            style={{
              width: 45,
              height: 45,
            }}
          />
          {openMenu && (
            <div
              style={{
                position: "absolute",
                bottom: -60,
                left: -60,
                backgroundColor: "#ccc",
                width: 120,
                borderRadius: 10,
              }}
            >
              <div style={{ cursor: "pointer" }}>
                <p
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #fff",
                    margin: 0,
                  }}
                  onClick={() => {
                    navigate("/list-order");
                    setOpenMenu(false);
                  }}
                >
                  List order
                </p>
                <p
                  style={{
                    textAlign: "center",
                    margin: 0,
                  }}
                  onClick={hanldeLogout}
                >
                  Log out
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button className="btn btn-primary" onClick={openModal}>
          Login
        </button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterClose={() => setRegister(false)}
        style={customStyles}
        contentLabel="Modal Login/Resgister"
      >
        <div
          className="d-flex flex-column align-items-center"
          style={{
            gap: 10,
          }}
        >
          <div
            style={{
              alignSelf: "end",
              cursor: "pointer",
            }}
            onClick={closeModal}
          >
            <IconClose />
          </div>
          {isResgister ? (
            <SignUp setRegister={setRegister} closeModal={closeModal} />
          ) : (
            <SignIn setRegister={setRegister} closeModal={closeModal} />
          )}
        </div>
      </Modal>

      <div
        className="header_hambuger"
        onClick={() => {
          setOpen(true);
        }}
      >
        <IconHamburger />
      </div>
    </div>
  );
};

export default MenuHeader;
