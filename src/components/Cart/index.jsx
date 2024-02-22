import { useDispatch, useSelector } from "react-redux";
import s from "./Cart.module.css";
import { ROOT_URL } from "../..";
import OrderDetails from "../OrderDetails";
import Navigation from "../../UI/Navigation/Navigation";
import plus from "../ProductInfo/icons/plus.svg";
import minus from "../ProductInfo/icons/minus.svg";
import style from "../ProductInfo/ProductInfo.module.css";
import {
  addProductAction,
  deleteProductAction,
  removeProductAction,
} from "../../store/Reducers/cartReducer";
import cross from "./cross.svg";
import { Link } from "react-router-dom";
import mobile from "../CategoriesContainer/CategoriesContainer.module.css";
import SimpleButton from "../../UI/SimpleButton/SimpleButton";

export default function Cart() {
  const { items } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const oldPrice = (price, discont_price) => {
    return Math.floor(price / (1 - discont_price / 100));
  };


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
      <Navigation
        width={"50%"}
        category={"Shopping cart"}
        title={"Back to the store"}
        link={"/categories"}
      />
      <div>
        {items.length !== 0 ? (
          <div className={s.cart_container}>
            <div>
              {items.map((el) => (
                <div className={s.cart_item} key={el.id}>
                  <img src={ROOT_URL + el.image} alt={el.title} />
                  <div className={s.product_info_cart}>
                    <p>{el.title}</p>
                    <img
                      className={s.cross_icon}
                      src={cross}
                      alt="cross_icon"
                      onClick={() => handleRemove(el.id)}
                    />
                    <div className={s.price_counter}>
                      <div className={style.counter}>
                        <img
                          src={minus}
                          onClick={() => handleDecrement(el.id)}
                        />
                        <p>{el.count}</p>
                        <img
                          src={plus}
                          onClick={() => handleIncrement(el.id)}
                        />
                      </div>
                      <div className={s.price}>
                        <h2 style={{ margin: "0" }}>${el.price}</h2>
                        {el.discont_price && (
                          <p>${oldPrice(el.price, el.discont_price)}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <OrderDetails />
          
          </div>
        ) : (
          <div className={s.empty_cart}>
            <p>Looks like you have no items in your basket currently.</p>
            <Link to="/products/all" className="link">
              <SimpleButton text={'Continue shopping'}/>
            </Link>
          </div>
        )}
          <div className={mobile.mobile_navi}>
              <Link to={"/products/all"} className="link">
                <span>Back to the store</span>
              </Link>
            </div>
      </div>
    </section>
  );
}
