import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/img/JOYSWEETS.svg';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="ae-container-fluid ae-container-fluid--full rk-header">
      <input
        type="checkbox"
        id="mobile-menu"
        className="rk-mobile-menu"
        checked={mobileMenuOpen}
        onChange={toggleMobileMenu}
      />
      <label htmlFor="mobile-menu" onClick={toggleMobileMenu}>
        <svg>
          <use xlinkHref="assets/img/symbols.svg#bar"></use>
        </svg>
        <svg>
          <use xlinkHref="assets/img/symbols.svg#bar"></use>
        </svg>
        <svg>
          <use xlinkHref="assets/img/symbols.svg#bar"></use>
        </svg>
      </label>
      <div className="ae-container-fluid rk-topbar">
        <h1 className="rk-logo">
          <Link to="/">
            <img
              src={logo}
              width="123"
              height="123"
              alt="JOYSWEETS"
            />
          </Link>
        </h1>
        <nav className="rk-navigation">
          <ul className="rk-menu">
            <li
              className={`rk-menu__item ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              <Link to="/home" className="rk-menu__link">
                Home
              </Link>
            </li>
            <li
              className={`rk-menu__item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link to="/about" className="rk-menu__link">
                Sobre mí
              </Link>
            </li>
            <li
              className={`rk-menu__item ${
                location.pathname === "/blog" ? "active" : ""
              }`}
            >
              <Link to="/blog" className="rk-menu__link">
                Blog
              </Link>
            </li>
            <li
              className={`rk-menu__item ${
                location.pathname === "/contacto" ? "active" : ""
              }`}
            >
              <Link to="/contacto" className="rk-menu__link">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
