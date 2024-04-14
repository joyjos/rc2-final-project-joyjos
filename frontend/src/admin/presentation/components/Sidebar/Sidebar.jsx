import "./Sidebar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ToggleMenu } from "../ToggleMenu/ToggleMenu";

export const Sidebar = () => {
  return (
    <aside>
      <div className="aside">
        <button>Mi cuenta</button>
        <Link to="/admin/posts"><button>Recetas</button></Link>
        <Link to="/admin/post"><button>Crear receta</button></Link>
        <Link to="/">
          <RiLogoutCircleRLine className="icon" size={35} title="Log Out" />
        </Link>
      </div>
    </aside>
  );
};
