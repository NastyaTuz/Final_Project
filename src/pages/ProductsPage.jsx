import BreadCrumbs from "../UI/BreadCrumbs/BreadCrumbs"
import FilterProducts from "../components/FilterProducts"
import ProductsList from "../components/ProductsList"


export default function ProductsPage({type, id}) {
    
  return (
    <div>
      <BreadCrumbs/>
      <FilterProducts type={type} id={id} />
      <ProductsList type={type}/>
    </div>
  )
}
