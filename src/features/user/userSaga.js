import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { apiGet, apiPost } from "../../utils/https/request";
import {
  requestSignIn,
  requestSignUp,
  responseSignIn,
  responseSignUp,
} from "./userSlice";

function* handleSignIn(action) {
  try {
    const data = yield apiPost("user/sign-in", action.payload, {});
    if (data.data) {
      const { id, cartId } = data.data;
      localStorage.setItem("id", JSON.stringify({ id, cartId }));
    }
    yield put(responseSignIn(data));
  } catch (error) {}
}

function* hanldeSignUp(action) {
  try {
    const data = yield apiPost("user/sign-up", action.payload, {});
    if (data.data) {
      const { insertedId, cartId } = data.data;
      localStorage.setItem("id", JSON.stringify({ id: insertedId, cartId }));
    }
    yield put(responseSignUp(data));
  } catch (error) {}
}

export function* userSaga() {
  yield takeLatest(requestSignIn.type, handleSignIn);
  yield takeLatest(requestSignUp.type, hanldeSignUp);
}
