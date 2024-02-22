import { useDispatch } from "react-redux";
import s from "./FilterProducts.module.css";
import {
  filterByPriceAction,
  filterBySaleAction,
  sortProductsAction,
} from "../../store/Reducers/productsReducer";
import Input from "../../UI/Input/Input";
import { useEffect, useRef } from "react";

export default function FilterProducts({ type, id }) {
  const checkBoxRef = useRef();
  const formRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    if (type !== "sale") {
      checkBoxRef.current.checked = false;
    }
    formRef.current[0].value = "";
    formRef.current[1].value = "";
  }, [type, id]);

  function handleSaleBox(e) {
    dispatch(filterBySaleAction(e.target.checked));
  }

  function priceFormHandler(e) {
    let formData = new FormData(e.target.parentElement.parentElement);
    let data = Object.fromEntries(formData);
    data.from = data.from ? +data.from : 0;
    data.to = data.to ? +data.to : Infinity;
    dispatch(filterByPriceAction(data));
  }

  function selectHandler(e) {
    dispatch(sortProductsAction(e.target.value));
  }
  return (
    <div className="wrapper">
      <div className={s.filter}>
        <form ref={formRef} onKeyUp={priceFormHandler}>
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
              <span className={s.checkmark}></span>
            </label>
          )}
        </div>

        <div className={s.sort_container}>
          <label>Sorted</label>
          <select onChange={selectHandler} name="Sort" id="dropdown">
            <option value="default">by default</option>
            <option value="price_asc">price: low-high</option>
            <option value="price_desc">price: high-low</option>
            <option value="title_asc">title: A-Z</option>
            <option value="title_desc">title: Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
}
