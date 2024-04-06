import "./Header.css";
import { Link } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa";

import logo from "../../../../presentation/assets/img/JOYSWEETS.svg";

export const Header = () => {
  return (
    <header className="admin">
      <img
        className="logo-admin"
        src={logo}
        width="100"
        height="100"
        alt="JOYSWEETS"
      />
      <div className="logout">
        <span>
          Hola <strong>Jose</strong>
        </span>
        <Link to="/">
          <FaSignOutAlt size={20} />
        </Link>
      </div>
    </header>
  );
};
