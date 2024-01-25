import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchAllProducts, fetchCategoryProducts } from "../asyncActions/products"


export default function ProductsPage({type}) {

    const {id} = useParams()
    const {category_title, products} = useSelector(store => store.products)

    const dispatch = useDispatch()

    useEffect(() => {
        if(type === 'all'){
            dispatch(fetchAllProducts(type))
        } else if(type === 'category'){
            dispatch(fetchCategoryProducts(id))
        }
    },[id, type]) 
    // useeffect in products list

    console.log(category_title);
    console.log(products);
    
  return (
    <div>
        <h2>{category_title}</h2>
        <div>
            {/* map */}
        </div>
      
    </div>
  )
}
