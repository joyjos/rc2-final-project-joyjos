import "./Header.css";
import { Link } from 'react-router-dom'
import { RiLogoutCircleRLine } from "react-icons/ri";

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
          <RiLogoutCircleRLine size={30} title="Log Out" />
        </Link>
      </div>
    </header>
  );
};
