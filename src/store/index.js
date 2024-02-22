import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { categoriesReducer } from "./Reducers/categoriesReducer";
import { productsReducer } from "./Reducers/productsReducer";
import { productInfoReducer } from "./Reducers/productInfoReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { modalWindowReducer } from "./Reducers/modalWindowReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "localStore",
  storage,
  blacklist: ["_persist"],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  product: productInfoReducer,
  cart: cartReducer,
  modal: modalWindowReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
