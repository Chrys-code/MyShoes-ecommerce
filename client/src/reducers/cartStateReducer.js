import { OPEN_CART, OPEN_CHECKOUT_FORM, CLOSE_UP } from "../types";

export const cartStateReducer = (
  state = {
    isOpen: false,
    isFormOpen: false,
  },
  action
) => {
  switch (action.type) {
    case OPEN_CART:
      return { isOpen: action.payload.isOpen };
    case OPEN_CHECKOUT_FORM:
      return { isFormOpen: action.payload.isFormOpen };
    case CLOSE_UP:
      return {
        isFormOpen: action.payload.isFormOpen,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
