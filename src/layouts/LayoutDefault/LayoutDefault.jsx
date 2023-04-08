import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Drawer from "../../components/Drawer/Drawer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { updateFromLocalStorage } from "../../features/user/userSlice";

const LayoutDefault = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);
  return (
    <div style={{ position: "relative" }}>
      <Header open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
