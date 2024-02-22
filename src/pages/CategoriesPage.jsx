import { useEffect } from "react";
import CategoriesContainer from "../components/CategoriesContainer";

export default function CategoriesPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CategoriesContainer />
    </div>
  );
}
