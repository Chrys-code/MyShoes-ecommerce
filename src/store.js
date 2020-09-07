import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";
import { cartStateReducer } from "./reducers/cartStateReducer";

const initialState = {};

const store = createStore(
  combineReducers({
    products: productsReducer,
    cart: cartReducer,
    cartState: cartStateReducer,
    order: orderReducer,
  }),
  initialState,
  applyMiddleware(thunk)
);

export default store;
