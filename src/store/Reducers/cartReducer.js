const defaultState = {
  items: [],
  countItems: 0,
  totalPrice: 0,
};

const ADD_ITEM = "ADD_ITEM";
const ADD_PRODUCT_COUNT = "ADD_PRODUCT_COUNT";
const REMOVE_PRODUCT_COUNT = "REMOVE_PRODUCT_COUNT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let findItemIndex = state.items.findIndex(
        (el) => el.id === action.payload.id
      );
      if (findItemIndex !== -1) {
        return {
          ...state,
          items: state.items.map((el) => {
            if (el.id === action.payload.id) {
              el.count += action.payload.count;
            }
            return el;
          }),
          countItems: state.countItems + 1,
          totalPrice: state.totalPrice + action.payload.price * action.payload.count,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          countItems: state.countItems + 1,
          totalPrice:
            state.totalPrice + action.payload.price * action.payload.count,
        };
      }

    case ADD_PRODUCT_COUNT:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.payload.id) {
            return { ...el, count: el.count + 1 };
          }
          return el;
        }),
        totalPrice:
          state.totalPrice + state.items.find((el) => el.id === action.payload.id).price,
      };

    case REMOVE_PRODUCT_COUNT:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.payload.id && el.count > 0) {
            return { ...el, count: el.count - 1 };
          }
          return el;
        }),
        countItems: state.countItems > 0 ? state.countItems - 1 : 0,
        totalPrice: state.totalPrice - state.items.find((el) => el.id === action.payload.id).price
      };
    case DELETE_PRODUCT:
      const deletedProduct = state.items.find((el) => el.id === action.payload.id);
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload.id),
        countItems: state.countItems > 0 ? state.countItems - deletedProduct.count: 0,
        totalPrice: state.totalPrice - deletedProduct.price * deletedProduct.count
      }

    default:
      return state;
  }
};

export const addItemAction = (payload) => ({ type: ADD_ITEM, payload });
export const addProductAction = (payload) => ({
  type: ADD_PRODUCT_COUNT,
  payload,
});
export const removeProductAction = (payload) => ({
  type: REMOVE_PRODUCT_COUNT,
  payload,
});
export const deleteProductAction = (payload) => ({
  type: DELETE_PRODUCT,
  payload,
});
