import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { apiGet } from "../../utils/https/request";
import { responseCallAPI } from "./counterSlice";

function* fetchData() {
  try {
    const res = yield apiGet("products/1", {});

    yield put(responseCallAPI(res));
  } catch (error) {}
}

export function* counterSaga() {
  yield takeLatest("counter/requestCallAPI", fetchData);
}
