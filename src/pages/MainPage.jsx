import React from "react";
import Banner from "../components/Banner";
import CategoriesContainer from "../components/CategoriesContainer";
import DiscountBanner from "../components/DiscountBanner";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <CategoriesContainer applySlice />
      <DiscountBanner />
    </div>
  );
}
