import { useEffect } from "react";
import CategoriesContainer from "../components/CategoriesContainer";
import BreadCrumbs from "../UI/BreadCrumbs/BreadCrumbs";

export default function CategoriesPage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      <BreadCrumbs/>
      <CategoriesContainer />
    </div>
  );
}
