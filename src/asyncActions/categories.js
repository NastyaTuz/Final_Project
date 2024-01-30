import { categoriesListAction } from "../store/Reducers/categoriesReducer"


export function fetchCategoriesList(){
    return function(dispatch){
        fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(data => dispatch(categoriesListAction(data)))
    }
}