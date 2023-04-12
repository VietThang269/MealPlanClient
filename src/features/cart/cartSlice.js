import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  userId: 0,
  total: 0,

  isChange: false,
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
      console.log(action.payload.list);
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

    removeItem(state, action) {
      const { id } = action.payload;
      const newList = state.list.filter((item, _) => item.id !== id);
      state.list = newList;
    },

    resetData(state, action) {
      state.list = [];
      state.total = 0;
    },

    setChange(state) {
      state.isChange = !state.isChange;
    },

    removeFromCart(state, action) {},
    updateCart(state, action) {},
  },
});

export const selectIsChange = (state) => state.cart.isChange;
export const selectListCard = (state) => state.cart.list;
export const selectTotal = (state) => state.cart.total;
// Action creators are generated for each case reducer function
export const {
  requestGetCart,
  responseGetCart,
  addToCart,
  changeQuanity,
  calcTotal,
  resetData,
  removeItem,
  setChange,
} = cartSlice.actions;

export default cartSlice.reducer;
