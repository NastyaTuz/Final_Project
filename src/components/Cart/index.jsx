import { useDispatch, useSelector } from "react-redux";
import s from "./Cart.module.css";
import { ROOT_URL } from "../..";
import OrderDetails from "../OrderDetails";
import Navigation from "../../UI/Navigation/Navigation";
import plus from "../ProductInfo/icons/plus.svg";
import minus from "../ProductInfo/icons/minus.svg";
import style from "../ProductInfo/ProductInfo.module.css";
import {addProductAction, deleteProductAction, removeProductAction } from "../../store/Reducers/cartReducer";
import cross from './cross.svg'

export default function Cart() {
  const { items} = useSelector((store) => store.cart);
    const dispatch = useDispatch();

  const oldPrice = (price, discont_price) => {
    return Math.round((price / (1 - discont_price / 100)) * 100) / 100;
  };

  //   const total = items.reduce((acc, el)=> acc + (el.count * (el.discont_price === null? el.price : el.discont_price)), 0)
  //   totalPrice = Math.ceil((total * 100) / 100)

  const handleIncrement = (id) => {
    dispatch(addProductAction({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(removeProductAction({ id }));
  };

  const handleRemove = (id) => {
    dispatch(deleteProductAction({ id }));
  };

  return (
    <section className="wrapper">
      <div className="navigation_container">
        <h2>Shopping cart</h2>
        <Navigation title={"Back to the store"} link={"/categories"} />
      </div>
      <div className={s.cart_container}>
        <div>
          {items.map((el) => (
            <div className={s.cart_item} key={el.id}>
              <img src={ROOT_URL + el.image} alt={el.title} />
              <div className={s.product_info_cart}>
                <p>{el.title}</p>
                <img
                 className = {s.cross_icon} 
                 src={cross} alt="cross_icon" 
                 onClick={() => handleRemove(el.id)}
                />
                <div className={s.price_counter}>
                  <div className={style.counter}>
                    <img
                      src={minus}
                      onClick={()=> handleDecrement(el.id)}
                    />
                    <p>{el.count}</p>
                    <img
                      src={plus}
                      onClick={() => handleIncrement(el.id)}
                    />
                  </div>
                  <h2 style={{ margin: "0" }}>${el.price}</h2>
                  {el.discont_price && (
                    <p>${oldPrice(el.price, el.discont_price)}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <OrderDetails />
        </div>
      </div>
    </section>
  );
}
