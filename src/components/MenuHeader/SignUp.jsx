import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSignUp,
  selectIsLogin,
  selectResponseUser,
} from "../../features/user/userSlice";
import { toast } from "react-toastify";

const SignUp = ({ setRegister, closeModal }) => {
  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const reponseUser = useSelector(selectResponseUser);
  const isLoginUser = useSelector(selectIsLogin);

  function hanldeLogin(data) {
    setSubmit(true);
    const { confirm_password, ...restData } = data;
    dispatch(requestSignUp(restData));
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
        SignUp
      </p>
      <form
        onSubmit={handleSubmit((data) => hanldeLogin(data))}
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
        {errors.email && (
          <span
            style={{
              fontSize: 12,
              color: "red",
            }}
          >
            This field is required
          </span>
        )}
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
            {...register("password", { required: true, minLength: 6 })}
          />
        </label>
        <span
          style={{
            fontSize: 12,
            color: "red",
          }}
        >
          {errors.password?.type === "required" && "This field is required"}
          {errors.password?.type === "minLength" && "Min length is 6"}
        </span>

        <label>
          Confirm password:
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
            {...register("confirm_password", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
          />
        </label>
        <span
          style={{
            fontSize: 12,
            color: "red",
          }}
        >
          {errors.confirm_password?.type === "required"
            ? "This field is required"
            : errors.confirm_password?.message}
        </span>
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
        >
          Sign Up
        </span>
      </p>
    </>
  );
};

export default SignUp;
