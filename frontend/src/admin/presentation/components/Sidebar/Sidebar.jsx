import "./Sidebar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ToggleMenu } from "../ToggleMenu/ToggleMenu";

export const Sidebar = () => {
  return (
    <aside>
      <div className="aside">
        <Link to="/admin/profile"><button className="admin-profile">Mi cuenta</button></Link>
        <Link to="/admin/dashboard"><button>Home</button></Link>
        <Link to="/admin/posts"><button>Recetas</button></Link>
        <Link to="/admin/post"><button>Crear receta</button></Link>
        <Link to="/">
          <RiLogoutCircleRLine className="icon" size={35} title="Log Out" />
        </Link>
      </div>
    </aside>
  );
};
