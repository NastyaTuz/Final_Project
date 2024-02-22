import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation({ category, title, link, width }) {
  return (
    <div className={s.navigation}>
      <h2 style={{ width }}>{category}</h2>
      <div>
        <hr />
        <Link className="link" to={`${link}`}>
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
}
