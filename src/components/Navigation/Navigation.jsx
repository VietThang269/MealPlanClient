import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isDrawer, open, setOpen }) => {
  return (
    <nav className={`d-flex gap-5 ${isDrawer ? "nav_drawer" : "nav"}`}>
      <Link to="/">
        <p className="nav_item">Home</p>
      </Link>
      <Link to="/about-us">
        <p className="nav_item">About</p>
      </Link>
      <Link to="/shop">
        <p className="nav_item">Shop</p>
      </Link>
      <Link to="/contact-us">
        <p className="nav_item">Contact Us</p>
      </Link>
    </nav>
  );
};

export default Navigation;
