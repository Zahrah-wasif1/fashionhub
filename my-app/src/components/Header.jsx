// Header.jsx

import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="logo" href="#">FashionHub</a>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Contact</a>
        </nav>

        <button className="cart-btn" aria-label="Cart">
          <FaShoppingCart size={18} />
        </button>
      </div>
    </header>
  );
}