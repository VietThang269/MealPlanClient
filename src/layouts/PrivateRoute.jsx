import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../features/user/userSlice";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ data }) => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLogin);

  useEffect(() => {
    if (!isLogin) {
      toast("Bạn chưa đăng nhập!", { type: "error" });
      navigate("/");
    }
  }, [isLogin]);

  return <Outlet />;
};

export default PrivateRoute;
