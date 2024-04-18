import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../../../presentation/assets/img/JOYSWEETS.svg";
import { AuthContext } from "../../../../middleware/context/AuthContext";
import Swal from "sweetalert2";

export const Header = () => {
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
          Hola <strong></strong>
        </span>
        <div onClick={handleLogout}>
          <Link to="/">
            <RiLogoutCircleRLine size={30} title="Log Out" />
          </Link>
        </div>
      </div>
    </header>
  );
};
