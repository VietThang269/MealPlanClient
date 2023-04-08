import React from "react";
import "./Header.css";

import Logo from "../../assets/imgs/Logo.png";
import Navigation from "../Navigation/Navigation";
import MenuHeader from "../MenuHeader/MenuHeader";
import { useNavigate } from "react-router-dom";

const Header = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <header id="header" className="py-3 shadow-lg position-sticky z-1">
      <div className="container d-flex justify-content-between align-items-center header_container">
        <img
          src={Logo}
          alt="Logo"
          className="header_logo"
          onClick={() => navigate("/")}
        />

        <Navigation open={open} setOpen={setOpen} />
        <MenuHeader open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Header;
