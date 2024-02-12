import { useDispatch } from "react-redux";
import s from "./FilterProducts.module.css";
import { filterBySaleAction } from "../../store/Reducers/productsReducer";
import Input from "../../UI/Input/Input";
import { useEffect, useRef } from "react";
import check from "./check.svg";

export default function FilterProducts({ type, id }) {
  const checkBoxRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    if (type !== "sale") {
      checkBoxRef.current.checked = false;
    }
  }, [type, id]);

  function handleSaleBox(e) {
    dispatch(filterBySaleAction(e.target.checked));
  }

  function priceFormHandler(e) {
    let formData = new FormData(e.target.parentElement.parentElement);
    let data = Object.fromEntries(formData);
    data.from = data.from ? +data.from: 0;
    data.to = data.to ? +data.to : Infinity;
    console.log(data);
  };

  return (
    <div className="wrapper">
      <div className={s.filter}>
        <form onKeyUp={priceFormHandler}>
          <label>
            Price
            <Input type="number" placeholder="from" name="from" />
            <Input type="number" placeholder="to" name="to" />
          </label>
        </form>

        <div>
          {type !== "sale" && (
            <label className={s.checkbox_container}>
              Discounted Items
              <Input
                ref={checkBoxRef}
                onClick={handleSaleBox}
                type="checkbox"
              />
              <img className={s.checkmark} src={check} />
            </label>
          )}
        </div>
      </div>
    </div>
  );
}
