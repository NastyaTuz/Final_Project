import {createStore, applyMiddleware, combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './Reducers/categoriesReducer'
import { productsReducer } from './Reducers/productsReducer'


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))