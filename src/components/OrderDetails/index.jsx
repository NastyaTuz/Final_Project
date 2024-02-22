import { useDispatch, useSelector } from "react-redux";
import { fetchPostOrder } from "../../asyncActions/postOrder";
import { OrderModalAction } from "../../store/Reducers/modalWindowReducer";
import { useForm } from "react-hook-form";
import Input from "../../UI/Input/Input";
import s from "../DiscountForm/DiscountForm.module.css";
import style from "./OrderDetai.module.css";
import ModalWindow from "../ModalWindow";
import SimpleButton from "../../UI/SimpleButton/SimpleButton";

export default function OrderDetails() {
  const { countItems, totalPrice } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form_submit = (data) => {
    console.log(data);
    fetchPostOrder(data);
    dispatch(OrderModalAction(true));
    reset();
  };

  return (
    <div>
      <div className={style.order_detail}>
        <h3>Order details</h3>
        <h4>{countItems} items</h4>
        <div>
          <h4>Total</h4>
          <h2 style={{ margin: 0 }}>${totalPrice}</h2>
        </div>
        <form className={s.form_container} onSubmit={handleSubmit(form_submit)}>
          <Input
            placeholder="Name"
            type="text"
            id="name"
            {...register("name", { required: "required field" })}
          />
          {errors.name && (
            <span className={s.error_text}>{errors.name.message}</span>
          )}

          <Input
            placeholder="Phone"
            type="tel"
            id="phone"
            {...register("phone", {
              required: "required field",
              maxLength: {
                value: 14,
                message: "Phone number should contain 14 symbols",
              },
            })}
          />
          {errors.phone && (
            <span className={s.error_text}>{errors.phone.message}</span>
          )}

          <Input
            placeholder="Email"
            type="email"
            id="email"
            {...register("email", {
              required: "required field",
              pattern: {
                message: "Wrong email",
                value:
                  /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
              },
            })}
          />
          {errors.email && (
            <span className={s.error_text}>{errors.email.message}</span>
          )}

          <SimpleButton text={"Order"} />
        </form>
      </div>
      <ModalWindow />
    </div>
  );
}
