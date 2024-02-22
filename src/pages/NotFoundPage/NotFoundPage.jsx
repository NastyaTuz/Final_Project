import React from "react";
import { Link } from "react-router-dom";
import notFound from "./media/images/404.png";
import s from "./NotFoundPage.module.css";
import SimpleButton from "../../UI/SimpleButton/SimpleButton";

export default function NotFoundPage() {
  return (
    <div className={s.not_found_page}>
      <img src={notFound} alt="not_found_Page" />
      <h2>Page Not Found</h2>
      <p>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <Link to={"/"}>
        <SimpleButton text={"Go Home"} />
      </Link>
    </div>
  );
}
