const defaultState = [];

const FETCH_CATEGORIES_LIST = "CATEGORIES_LIST";

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_LIST:
      return action.payload;

    default:
      return state;
  }
};

export const categoriesListAction = (payload) => ({
  type: FETCH_CATEGORIES_LIST,
  payload,
});
