import logo from "./icons/logo.svg";
import cart from "./icons/cart.svg";
import burger from "./icons/menu.svg";
import x from "./icons/ic x.svg";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const { countItems } = useSelector((store) => store.cart);

  const [burgerMenu, setBurgerMenu] = useState(false);

  function handleMenu() {
    setBurgerMenu(!burgerMenu);
  }

  return (
    <div>
      <header className={`${s.header_container} wrapper`}>
        <Link to={"/"} className="link">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <ul className={`${burgerMenu ? s.menu_active : ""}`}>
            <img src={x} className={s.cross} onClick={handleMenu} alt="cross" />
            <Link to={"/"} className="link">
              <li>Main Page</li>
            </Link>
            <Link to={"/categories"} className="link">
              <li>Categories</li>
            </Link>
            <Link to={"/products/all"} className="link">
              <li>All products</li>
            </Link>
            <Link to={"/products/sales"} className="link">
              <li>All sales</li>
            </Link>
          </ul>
        </nav>
        <div>
          <Link to={"/cart"} className="link">
            {countItems > 0 && (
              <span className={s.cart_counter}>{countItems}</span>
            )}
            <img src={cart} alt="cart" />
          </Link>
          <img
            onClick={handleMenu}
            className={`${s.burger_menu} `}
            src={burger}
            alt="burger_menu"
          />
        </div>
      </header>
      <hr style={{ border: "0.5px solid #DDD" }} />
    </div>
  );
}
