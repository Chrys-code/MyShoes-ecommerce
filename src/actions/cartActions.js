import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  OPEN_CART,
  OPEN_CHECKOUT_FORM,
  CLOSE_UP,
} from "../types";

// CART ACTIONS

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((element) => {
    if (element._id === product._id) {
      alreadyExists = true;
      element.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);

  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// CART AND FORM STATE OPEN/CLOSE

export const openCart = () => (dispatch, getState) => {
  const isOpen = !getState().cartState.isOpen;
  dispatch({
    type: OPEN_CART,
    payload: { isOpen },
  });
};

export const openCheckoutForm = () => (dispatch, getState) => {
  const isFormOpen = !getState().cartState.isFormOpen;
  console.log(isFormOpen);

  dispatch({
    type: OPEN_CHECKOUT_FORM,
    payload: { isFormOpen },
  });
};

export const closeUp = () => (dispatch) => {
  const isFormOpen = false;
  const isOpen = false;

  dispatch({
    type: CLOSE_UP,
    payload: { isFormOpen, isOpen },
  });
};
