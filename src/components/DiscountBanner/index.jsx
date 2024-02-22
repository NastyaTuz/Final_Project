import DiscountForm from "../DiscountForm";
import s from "./DiscountBanner.module.css";
import discount_image from "./discount.png";

export default function DiscountBanner() {
  return (
    <div className={["wrapper", s.discount_banner].join(" ")}>
      <h2>5% off on the first order</h2>
      <div className={s.banner_img}>
      <img src={discount_image} alt="discount_image" />
      </div>
      <div>
        <DiscountForm />
      </div>
    </div>
  );
}
