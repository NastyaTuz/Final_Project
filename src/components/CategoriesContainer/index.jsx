import { useDispatch, useSelector } from "react-redux";
import s from "./CategoriesContainer.module.css";
import { useEffect } from "react";
import { categoriesList } from "../../asyncActions/categories";
import CategoryCard from "../CategoryCard";

export default function CategoriesContainer({ applySlice = false }) {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesList());
  }, []);

  
  return (
    <div className="wrapper">
      <h2>Categories</h2>
      <div className={s.categories_container}>
        {applySlice?
         categories
              .slice(0, 4)
              .map((el) => <CategoryCard key={el.id} {...el} />)
          : categories.map((el) => <CategoryCard key={el.id} {...el} />)}
      </div>
    </div>
  );
}
