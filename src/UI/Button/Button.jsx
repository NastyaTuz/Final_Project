import s from "./Button.module.css";

export default function Button({ text, color, width, type, ...otherProps }) {
  return (
    <button
      style={{ width }}
      type={type}
      {...otherProps}
      className={[s.button_action, s[color]].join(" ")}
    >
      {text}
    </button>
  );
}
