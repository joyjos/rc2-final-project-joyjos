import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/JOYSWEETS.svg";
import { RiUserSmileFill } from "react-icons/ri";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="ae-container-fluid ae-container-fluid--full rk-header animated fadeIn">
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
            <img src={logo} width="123" height="123" alt="JOYSWEETS" />
          </Link>
        </h1>
        <nav className="rk-navigation">
          <ul className="rk-menu">
            <li className="rk-menu__item">
              <Link
                to="/"
                className={`rk-menu__link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="rk-menu__item">
              <Link
                to="/blog"
                className={`rk-menu__link ${
                  location.pathname.startsWith("/blog") ? "active" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li className="rk-menu__item">
              <Link
                to="/admin"
                className={`rk-menu__link ${
                  location.pathname.startsWith("/admin") ? "active" : ""
                }`}
              >
                <RiUserSmileFill style={{ fontSize: "24px" }} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
