import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  email: "",
  token: "",
  role: "",
  isLogin: false,

  response: {
    loading: false,
    message: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    requestSignUp(state, action) {
      state.response.loading = true;
    },

    requestSignIn(state, action) {
      state.response.loading = true;
    },

    responseSignIn(state, action) {
      state.response.loading = false;

      if (action.payload.data) {
        // LOGIN SUCCESS
        const { id, token, email, role } = action.payload.data;
        state.id = id;
        state.token = token;
        state.email = email;
        state.role = role;
        state.isLogin = true;
      }

      state.response.loading = false;
      state.response.message = action.payload.message;
    },

    responseSignUp(state, action) {
      state.response.loading = false;

      if (action.payload.data) {
        // LOGIN SUCCESS
        const { id, token, email, role } = action.payload.data;
        state.id = id;
        state.token = token;
        state.email = email;
        state.role = role;
        state.isLogin = true;
      }

      state.response.loading = false;
      state.response.message = action.payload.message;
    },

    updateFromLocalStorage(state, action) {
      const { id } = action.payload;
      state.id = id;
      state.isLogin = true;
    },

    logOut(state, action) {
      state.id = "";
      state.email = "";
      state.token = "";
      state.role = "";
      state.isLogin = false;
      localStorage.removeItem("id");
    },
  },
});

export const selectResponseUser = (state) => state.user.response;
export const selectToken = (state) => state.user.token;
export const selectId = (state) => state.user.id;
export const selectIsLogin = (state) => state.user.isLogin;

// Action creators are generated for each case reducer function
export const {
  requestSignUp,
  requestSignIn,
  responseSignIn,
  responseSignUp,
  updateFromLocalStorage,
  logOut,
} = userSlice.actions;

export default userSlice.reducer;
