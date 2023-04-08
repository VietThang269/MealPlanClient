import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { apiGet } from "../../utils/https/request";
import { requestGetProducts, responseGetProducts } from "./productSlice";

function* handleGetAllProduct() {
  try {
    const data = yield apiGet("product", {});

    yield put(responseGetProducts(data.data));
  } catch (error) {}
}

export function* productSaga() {
  yield takeLatest(requestGetProducts.type, handleGetAllProduct);
}
