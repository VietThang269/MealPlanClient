import React from "react";
import IconClose from "../../assets/icons/IconClose";
import Navigation from "../Navigation/Navigation";
import "./Drawer.css";

const Drawer = ({ open, setOpen }) => {
  return (
    open && (
      <div className="header_drawer shadow-lg">
        <div
          onClick={() => setOpen(false)}
          className="d-flex justify-content-end"
        >
          <IconClose />
        </div>

        <div className="d-flex flex-column gap-5">
          <Navigation isDrawer={true} />

          <button type="button" class="btn btn-primary">
            Order Your Meal
          </button>
        </div>
      </div>
    )
  );
};

export default Drawer;
