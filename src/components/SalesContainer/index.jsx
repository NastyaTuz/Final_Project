import { useDispatch, useSelector } from "react-redux";
import s from "./SalesContainer.module.css";
import { fetchAllProducts } from "../../asyncActions/products";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
import Navigation from "../../UI/Navigation/Navigation";

export default function SalesContainer({ type, applySlice = false }) {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts(type));
  }, [type]);

  return (
    <div className="wrapper">
      <div className="navigation_container">
        <h2>Sales</h2>
        <Navigation title={"All sales"} />
      </div>
      <div className={s.sales_list}>
        {applySlice
          ? products
              .slice(0, 4)
              .map((el) => <ProductCard key={el.id} {...el} />)
          : products.map((el) => <ProductCard key={el.id} {...el} />)}
      </div>
    </div>
  );
}
