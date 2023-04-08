import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { apiGet } from "../../utils/https/request";
import { requestGetCart, responseGetCart } from "./cartSlice";
function* handleGetCart(action) {
  try {
    const { userId } = action.payload;
    const response = yield apiGet(`cart/user/${userId}`, {});
    yield put(responseGetCart(response.data));
  } catch (error) {}
}

export function* cartSaga() {
  yield takeLatest(requestGetCart.type, handleGetCart);
}
