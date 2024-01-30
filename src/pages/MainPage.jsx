import React from "react";
import Banner from "../components/Banner";
import CategoriesContainer from "../components/CategoriesContainer";
import DiscountBanner from "../components/DiscountBanner";
import SalesContainer from "../components/SalesContainer";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <CategoriesContainer applySlice  applyNavigation/>
      <DiscountBanner />
      <SalesContainer type={'sale'}  applySlice/>
    </div>
  );
}
