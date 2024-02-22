import { useState } from "react";
import s from "./Button.module.css";

export default function Button({ text, onClick, ...otherProps }) {
  const [active, setActive] = useState(false);

  function handleButton(e) {
    onClick(e);
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  }
  return (
    <button
      className={`${s.button_action} ${
        active ? s.btn_active : s.button_action
      }`}
      onClick={handleButton}
      {...otherProps}
    >
      {active ? "Added" : text}
    </button>
  );
}
