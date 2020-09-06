import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

const initialState = {};

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
  }),
  initialState,
  applyMiddleware(thunk)
);

export default store;
