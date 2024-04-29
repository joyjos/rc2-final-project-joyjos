import "./Header.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/JOYSWEETS.svg";
import { RiUserSmileFill } from "react-icons/ri";
import { HamburgerMenu } from "../HamburguerMenu/HamburgerMenu";

export const Header = () => {
  
  const location = useLocation();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="ae-container-fluid ae-container-fluid--full rk-header animated fadeIn">
      <HamburgerMenu closeMobileMenu={closeMobileMenu} />
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
