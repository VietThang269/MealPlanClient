import { all } from "redux-saga/effects";
import { cartSaga } from "./features/cart/cartSaga";
import { productSaga } from "./features/product/productSaga";
import { userSaga } from "./features/user/userSaga";

export default function* rootSaga() {
  yield all([userSaga(), productSaga(), cartSaga()]);
}
