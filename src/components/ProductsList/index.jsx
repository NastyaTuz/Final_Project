import { useEffect } from "react";
import {
  fetchAllProducts,
  fetchCategoryProducts,
} from "../../asyncActions/products";
import s from "./ProductsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { useParams } from "react-router-dom";
import { clearDataAction } from "../../store/Reducers/productsReducer";
import { addItemAction } from "../../store/Reducers/cartReducer";

export default function ProductsList({ type }) {
  const { id } = useParams();

  const { category_title, products } = useSelector((store) => store.products);
  const filtered_products = products.filter((el) => el.isShow && el.isShowPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDataAction());
    if (type !== "category") {
      dispatch(fetchAllProducts(type));
    } else {
      dispatch(fetchCategoryProducts(id));
    }
  }, [id, type]);

  const oldPrice = (price, discont_price) => {
    return Math.round((price / (1 - discont_price / 100)) * 100) / 100;
  };

  function AddToCartHandle(e, obj) {
    e.preventDefault();
    dispatch(addItemAction({ ...obj, count: 1 }));
  }

  return (
    <div className="wrapper">
      <h2>{category_title}</h2>
      <div className={s.product_list}>
        {filtered_products.map((el) => (
          <ProductCard
            key={el.id}
            {...el}
            oldPrice={oldPrice(el.price, el.discont_price)}
            addToCart={(e) => AddToCartHandle(e, el)}
          />
        ))}
      </div>
    </div>
  );
}
