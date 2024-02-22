import s from "./SimpleButton.module.css";

export default function SimpleButton({ text, ...OtherProps }) {
  return (
    <button className={s.simple_button} {...OtherProps}>
      {text}
    </button>
  );
}
