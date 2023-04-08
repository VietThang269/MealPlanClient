import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestGetProducts(state, action) {
      state.loading = true;
    },

    responseGetProducts(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const selectDataProduct = (state) => state.product.data;

// Action creators are generated for each case reducer function
export const { requestGetProducts, responseGetProducts } = productSlice.actions;

export default productSlice.reducer;
