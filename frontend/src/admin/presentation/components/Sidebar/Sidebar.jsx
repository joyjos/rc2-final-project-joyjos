import "./Sidebar.css";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside>
      <div className="aside">
        <Link to="/admin/posts">
          <h3 className="recetas">Recetas</h3>
        </Link>
        <Link to="/admin/post">
          <h3 className="recetas">Crear Receta</h3>
        </Link>
        <Link to="/">
          <FaSignOutAlt className="icon" size={20} />
        </Link>
      </div>
    </aside>
  );
};
