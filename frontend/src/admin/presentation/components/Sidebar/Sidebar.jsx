import "./Sidebar.css";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToggleMenu } from "../ToggleMenu/ToggleMenu";

export const Sidebar = () => {
  return (
    <aside>
      <div className="aside">
        <ToggleMenu />
        <Link to="/">
          <FaSignOutAlt className="icon" size={20} />
        </Link>
      </div>
    </aside>
  );
};
