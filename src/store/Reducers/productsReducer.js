const defaultState = {
  category_title: "",
  products: [],
};

const CLEAR_DATA = 'CLEAR_DATA'
const ALL_PRODUCTS = "ALL_PRODUCTS";
const CATEGORY_PRODUCTS = "CATEGORY_PRODUCTS";
const SALE_PRODUCTS = "SALE_PRODUCTS";
const FILTER_BY_SALE = "FILTER_BY_SALE";

function addIsShowProp(array) {
  return array.map((el) => ({ ...el, isShow: true, isShowPrice: true }));
}

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_DATA:
      return defaultState
    case ALL_PRODUCTS:
      return {
        category_title: "All Products",
        products: addIsShowProp(action.payload),
      };
    case CATEGORY_PRODUCTS:
      return {
        category_title: action.payload.category.title,
        products: addIsShowProp(action.payload.data),
      };
    case SALE_PRODUCTS:
      let sales_products = action.payload.filter((el) => el.discont_price);
      return {
        category_title: "Discounted items",
        products: addIsShowProp(sales_products),
      };
    case FILTER_BY_SALE:
      if (action.payload) {
        return {
          ...state,
          products: state.products.map((el) => {
            if (!el.discont_price) {
              el.isShow = false;
            }
            return el;
          }),
        };
      } else {
        return {
          ...state,
          products: addIsShowProp(state.products),
        };
      }

    default:
      return state;
  }
};

export const clearDataAction = () => ({ type: CLEAR_DATA });
export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const categoryProductsAction = (payload) => ({
  type: CATEGORY_PRODUCTS,
  payload,
});
export const salesProductsAction = (payload) => ({
  type: SALE_PRODUCTS,
  payload,
});
export const filterBySaleAction = (payload) => ({
  type: FILTER_BY_SALE,
  payload,
});
