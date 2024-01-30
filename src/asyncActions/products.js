import { ROOT_URL } from ".."
import { allProductsAction, categoryProductsAction, salesProductsAction } from "../store/Reducers/productsReducer"

export function fetchAllProducts(type){
    return function(dispatch){
        fetch(ROOT_URL+'/products/all')
        .then(res => res.json())
        .then(data => {
            if(type === 'all'){
                dispatch(allProductsAction(data))
            }else if(type === 'sale'){
                dispatch(salesProductsAction(data))
            }
        })
    }
}


export function fetchCategoryProducts(id){
    return function(dispatch){
        fetch(ROOT_URL+'/categories/'+id)
        .then(res => res.json())
        .then(data => dispatch(categoryProductsAction(data)))
    }
}