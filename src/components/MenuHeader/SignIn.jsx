import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSignIn,
  selectIsLogin,
  selectResponseUser,
  selectToken,
} from "../../features/user/userSlice";
import { toast } from "react-toastify";

const SignIn = ({ setRegister, closeModal }) => {
  const [submit, setSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reponseUser = useSelector(selectResponseUser);
  const tokenUser = useSelector(selectToken);
  const isLoginUser = useSelector(selectIsLogin);

  const dispatch = useDispatch();
  function hanldeSignIn(values) {
    setSubmit(true);
    dispatch(requestSignIn(values));
  }

  useEffect(() => {
    if (submit && !reponseUser.loading) {
      toast(reponseUser.message);
    }
  }, [reponseUser.loading]);

  useEffect(() => {
    if (submit) {
      if (isLoginUser) {
        closeModal();
      }
    }
  }, [isLoginUser]);

  return (
    <>
      <p
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "var(--primary2)",
        }}
      >
        Login
      </p>
      <form
        onSubmit={handleSubmit((data) => hanldeSignIn(data))}
        className="d-flex flex-column w-100"
        style={{
          gap: 20,
        }}
      >
        <label>
          Email:
          <input
            className="w-100"
            type="email"
            placeholder="Enter your email"
            style={{
              outline: "none",
              border: "none",
              padding: 10,
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
            }}
            {...register("email", { required: true })}
          />
        </label>
        <label>
          Password:
          <input
            style={{
              outline: "none",
              border: "none",
              padding: 10,
              backgroundColor: "#f2f2f2",
              borderRadius: 10,
            }}
            placeholder="Enter your password"
            className="w-100"
            type="password"
            {...register("password", { required: true })}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      <p
        style={{
          fontSize: 14,
        }}
      >
        Don't have an account yet?{" "}
        <span
          style={{
            color: "var(--primary2)",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => setRegister(true)}
        >
          Sign Up
        </span>
      </p>
    </>
  );
};

export default SignIn;
