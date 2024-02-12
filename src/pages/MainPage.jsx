import React, { useRef } from "react";
import Banner from "../components/Banner";
import CategoriesContainer from "../components/CategoriesContainer";
import DiscountBanner from "../components/DiscountBanner";
import SalesContainer from "../components/SalesContainer";

export default function MainPage() {

  const productsRef = useRef(null)

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Banner scrollToProducts={scrollToProducts} />
      <CategoriesContainer applySlice  applyNavigation/>
      <DiscountBanner />
      <div  ref={productsRef}>
      <SalesContainer type={'sale'}  applySlice/>
      </div>
    </div>
  );
}
