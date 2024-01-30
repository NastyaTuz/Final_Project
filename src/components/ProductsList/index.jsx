import { useEffect } from "react";
import {
  fetchAllProducts,
  fetchCategoryProducts,
} from "../../asyncActions/products";
import s from "./ProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";

export default function ProductsList({ type }) {
  const { id } = useParams();

  const { category_title, products } = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (type !== 'category'){
        dispatch(fetchAllProducts(type))
    } else {
        dispatch(fetchCategoryProducts(id))
    }
}, [id, type])

  return (
    <div className='wrapper'>
      <h2>{category_title}</h2>
      <div className={s.product_list}>
      {products.map((el) => (
        <ProductCard key={el.id} {...el} />
      ))}
      </div>
    </div>
  );
}
