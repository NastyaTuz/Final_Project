import { useDispatch, useSelector } from "react-redux";
import s from "./ModalWindow.module.css";
import cross from "./icon/cross.svg";
import { OrderModalAction } from "../../store/Reducers/modalWindowReducer";

export default function ModalWindow() {
  const dispatch = useDispatch();
  const { orderModal } = useSelector((store) => store.modal);

  return (
    <div className={`${s.modal} ${orderModal ? s.active : ''}`}>
      <div className={`${s.modal_content} ${orderModal ? s.active : ""}`}>
        <img
          onClick={() => dispatch(OrderModalAction(false))}
          src={cross}
          alt="cross_btn"
        />
        <h3>Congratulations!</h3>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    </div>
  );
}
