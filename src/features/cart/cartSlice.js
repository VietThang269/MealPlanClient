import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  userId: 0,
  total: 0,
  response: {
    loading: false,
    message: "",
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestGetCart(state, action) {
      state.response.loading = true;
    },
    responseGetCart(state, action) {
      state.response.loading = false;
      state.response.message = action.payload.message;
      state.list = action.payload.list;

      // Calc
      const listTotal = action.payload.list.map(
        (item, _) => item.price * item.quanity
      );
      const total = listTotal.reduce((a, b) => a + b);
      state.total = total;
    },

    changeQuanity(state, action) {
      const { id, quanity } = action.payload;
      state.list = state.list.map((item, _) => {
        if (item.id === id) {
          item.quanity = item.quanity + quanity;
        }
        return item;
      });
    },

    calcTotal(state, action) {
      // Calc
      const listTotal = state.list.map((item, _) => item.price * item.quanity);
      const total = listTotal.reduce((a, b) => a + b);
      state.total = total.toFixed(2);
    },

    addToCart(state, action) {
      // Thêm -> giao diện trước -> server thành công hay ko thì mặc kê
    },
    removeFromCart(state, action) {},
    updateCart(state, action) {},
  },
});

export const selectListCard = (state) => state.cart.list;
export const selectTotal = (state) => state.cart.total;
// Action creators are generated for each case reducer function
export const {
  requestGetCart,
  responseGetCart,
  addToCart,
  changeQuanity,
  calcTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
