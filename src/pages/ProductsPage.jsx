import ProductsList from "../components/ProductsList"


export default function ProductsPage({type}) {
    
  return (
    <div>
      <ProductsList type={type}/>
    </div>
  )
}
