const defaultState = {
  category_title: "",
  products: [],
};

const ALL_PRODUCTS = "ALL_PRODUCTS";
const CATEGORY_PRODUCTS = "CATEGORY_PRODUCTS";
const SALE_PRODUCTS = "SALE_PRODUCTS";

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return { category_title: "All Products", products: action.payload };
    case CATEGORY_PRODUCTS:
      return {
        category_title: action.payload.category.title,
        products: action.payload.data,
      };
    case SALE_PRODUCTS:
        
    default:
      return state;
  }
};

export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const categoryProductsAction = (payload) => ({
  type: CATEGORY_PRODUCTS,
  payload,
});
