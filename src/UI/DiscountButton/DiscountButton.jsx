import { useState } from "react";
import s from "./DiscountButton.module.css";

export default function DiscountButton({ ...otherProps }) {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 3000);
  };
  return (
    <button
      className={`${s.discount_button} ${
        submit ? s.submitted : s.discount_button
      }`}
      onClick={handleSubmit}
      {...otherProps}
    >
      {submit ? "Request Submitted" : "Get a discount"}
    </button>
  );
}
