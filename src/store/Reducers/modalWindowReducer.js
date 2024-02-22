const defaultState = {
  orderModal: false
};
const CHANGE_ORDER_MODAL = "CHANGE_ORDER_MODAL";

export const modalWindowReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ORDER_MODAL:
      return { ...state, orderModal: action.payload };
    default:
      return state;
  }
};

export const OrderModalAction = (payload) => ({
  type: CHANGE_ORDER_MODAL,
  payload,
});
