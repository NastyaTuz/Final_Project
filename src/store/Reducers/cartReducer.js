const defaultState = {
  items: [],
  countItems: 0,
  totalPrice: 0,
};

const ADD_ITEM = "ADD_ITEM";
const ADD_PRODUCT_COUNT = "ADD_PRODUCT_COUNT";
const REMOVE_PRODUCT_COUNT = "REMOVE_PRODUCT_COUNT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CLEAR_CART = "CLEAR_CART";

const calculateTotalPrice = (items) => {
  return items.reduce((acc, el) => {
    return (
      acc + el.count * (el.discont_price === null ? el.price : el.discont_price)
    );
  }, 0);
};

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
          countItems: state.countItems,
          totalPrice: calculateTotalPrice(state.items),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
          countItems: state.countItems + 1,
          totalPrice: calculateTotalPrice([...state.items, action.payload]),
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
        totalPrice: calculateTotalPrice(
          state.items.map((el) => {
            if (el.id === action.payload.id) {
              return { ...el, count: el.count + 1 };
            }
            return el;
          })
        ),
      };

    case REMOVE_PRODUCT_COUNT:
      const updatedItems = state.items.map((el) =>
        el.id === action.payload.id
          ? { ...el, count: Math.max(el.count - 1, 0) }
          : el
      );

      const remainingItems = updatedItems.filter((el) => el.count > 0);
      const uniqueItemCount = remainingItems.length;

      return {
        ...state,
        items: remainingItems,
        countItems: uniqueItemCount,
        totalPrice: calculateTotalPrice(remainingItems),
      };

    case DELETE_PRODUCT:
      const deletedProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      const updatedCountItemsDelete =
        state.countItems - (deletedProduct ? deletedProduct.count : 0);

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        countItems: Math.max(updatedCountItemsDelete, 0),
        totalPrice: calculateTotalPrice(
          state.items.filter((item) => item.id !== action.payload.id)
        ),
      };

    case CLEAR_CART:
      return defaultState;

    default:
      return state;
  }
};

export const addItemAction = (payload) => ({
  type: ADD_ITEM,
  payload,
});
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
export const clearCartAction = () => ({
  type: CLEAR_CART,
});
