import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault/LayoutDefault";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactUs/ContactUs";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./layouts/PrivateRoute";
import { useDispatch } from "react-redux";
import { updateFromLocalStorage } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    const data = localStorage.getItem("id");
    if (data) {
      dispatch(updateFromLocalStorage(JSON.parse(data)));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about-us" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
      />
    </BrowserRouter>
  );
}

export default App;
