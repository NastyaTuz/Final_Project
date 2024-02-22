const defaultState = {};

const PRODUCT_INFO = "PRODUCT_INFO";
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const productInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_INFO:
      return { ...action.payload, count: 1 };
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: Math.min(state.count + action.payload, 25),
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: Math.max(state.count - action.payload, 1),
      };

    default:
      return state;
  }
};

export const productInfoAction = (payload) => ({
  type: PRODUCT_INFO,
  payload,
});
export const incrementCounterAction = (payload) => ({
  type: INCREMENT_COUNTER,
  payload,
});
export const decrementCounterAction = (payload) => ({
  type: DECREMENT_COUNTER,
  payload,
});
