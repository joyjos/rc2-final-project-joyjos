import "./Sidebar.css";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../middleware/context/AuthContext";
import Swal from "sweetalert2";

export const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      console.log("Cerrando sesión...");
      await logout();
      Swal.fire({
        title: "¡Hasta luego!",
        text: "Has cerrado sesión exitosamente.",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error al cerrar sesión. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  return (
    <aside>
      <div className="aside">
        {/* <Link to="/admin/profile"><button className="admin-profile">Mi cuenta</button></Link> */}
        <Link to="/admin/dashboard"><button>Home</button></Link>
        <Link to="/admin/posts"><button>Recetas</button></Link>
        <Link to="/admin/post"><button>Crear receta</button></Link>
        <div onClick={handleLogout}>
          <Link to="/">
            <RiLogoutCircleRLine size={30} title="Log Out" />
          </Link>
        </div>
      </div>
    </aside>
  );
};
