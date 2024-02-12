import { useDispatch, useSelector } from "react-redux";
import s from "./CategoriesContainer.module.css";
import { useEffect } from "react";
import { fetchCategoriesList } from "../../asyncActions/categories";
import CategoryCard from "../CategoryCard";
import Navigation from "../../UI/Navigation/Navigation";
import BreadCrumbs from "../../UI/BreadCrumbs/BreadCrumbs";

export default function CategoriesContainer({
  applySlice = false,
  applyNavigation = false,
}) {
  const categories = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, []);

  return (
    <div className="wrapper">
      <div className="navigation_container">
        <h2>Categories</h2>
        {applyNavigation ? <Navigation title={"All categories"} link={'/categories'} /> : ""}
      </div>
      <div className={s.categories_container}>
        {applySlice
          ? categories
              .slice(0, 4)
              .map((el) => <CategoryCard key={el.id} {...el} />)
          : categories.map((el) => <CategoryCard key={el.id} {...el} />)}
      </div>
    </div>
  );
}
