import { useDispatch, useSelector } from "react-redux";
import s from "./SalesContainer.module.css";
import { fetchAllProducts } from "../../asyncActions/products";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
import Navigation from "../../UI/Navigation/Navigation";


export default function SalesContainer({ type, applySlice = false}) {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts(type));
  }, [type]);


  const oldPrice = (price, discont_price) => {
    return Math.round((price / (1 - discont_price / 100)) * 100) / 100;
  };

  return (
    <div className="wrapper">
      <div className="navigation_container">
        <h2>Sales</h2>
        <Navigation title={"All sales"} link={'/products/sales'}/>
      </div>
      <div className={s.sales_list}>
        {applySlice
          ? products
              .slice(0, 4)
              .sort((a, b) => b.price - a.price)
              .map((el) => <ProductCard key={el.id} {...el} oldPrice={oldPrice(el.price, el.discont_price)} />)
          : products.map((el) => <ProductCard key={el.id} {...el}/>)}
      </div>
    </div>
  );
}
