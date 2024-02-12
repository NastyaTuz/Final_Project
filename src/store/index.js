import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './Reducers/categoriesReducer'
import { productsReducer } from './Reducers/productsReducer'
import { productInfoReducer } from './Reducers/productInfoReducer'
import { cartReducer } from './Reducers/cartReducer'
import { modalWindowReducer } from './Reducers/modalWindowReducer'


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: productInfoReducer,
    cart: cartReducer,
    modal: modalWindowReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))