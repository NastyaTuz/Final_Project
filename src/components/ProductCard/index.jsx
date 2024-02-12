import s from "./ProductCard.module.css";
import { ROOT_URL } from "../..";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  title,
  image,
  price,
  discont_price,
  oldPrice,
  addToCart,
}) {

  
  return (
    <Link className="link" to={"/products/" + id} key={id}>
      <section className={s.product_card}>
        <img src={ROOT_URL + image} alt={title} />
        {discont_price && <span>-{discont_price}%</span>}
        <div className={s.button_cart}>
          <Button  
          onClick={addToCart}
          color={"green"}
           width={"284px"} 
           text={"Add to Cart"}
            />
        </div>
        <p>{title}</p>
        <div className={s.price_discont}>
          <h3>${price}</h3>
          {discont_price && <p>${oldPrice}</p>}
        </div>
      </section>
    </Link>
  );
}
