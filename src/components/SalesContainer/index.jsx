import { useDispatch, useSelector } from "react-redux";
import s from "./SalesContainer.module.css";
import { fetchAllProducts } from "../../asyncActions/products";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
import Navigation from "../../UI/Navigation/Navigation";
import { addItemAction } from "../../store/Reducers/cartReducer";
import { Link } from "react-router-dom";
import style from "../CategoriesContainer/CategoriesContainer.module.css";

export default function SalesContainer({ type, applySlice = false }) {
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts(type));
  }, [type]);

  const oldPrice = (price, discont_price) => {
    return Math.round((price / (1 - discont_price / 100)) * 100) / 100;
  };

  function AddToCartHandle(e, obj) {
    e.preventDefault();
    dispatch(addItemAction({ ...obj, count: 1 }));
  }

  return (
    <div className="wrapper">
      <Navigation
        category={"Sales"}
        title={"All sales"}
        link={"/products/sales"}
      />

      <div className={s.sales_list}>
        {applySlice
          ? products
              .slice(0, 4)
              .sort((a, b) => b.price - a.price)
              .map((el) => (
                <ProductCard
                  key={el.id}
                  {...el}
                  oldPrice={oldPrice(el.price, el.discont_price)}
                  addToCart={(e) => AddToCartHandle(e, el)}
                />
              ))
          : products.map((el) => (
              <ProductCard
                key={el.id}
                {...el}
                addToCart={(e) => AddToCartHandle(e, el)}
              />
            ))}
      </div>
      <div className={style.mobile_navi}>
        <Link to={"/products/sales"} className="link">
          <span>All sales</span>
        </Link>
      </div>
    </div>
  );
}
