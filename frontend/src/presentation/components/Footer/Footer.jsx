import "./Footer.css";
import logo from "../../assets/img/JOYSWEETS.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  const fechaActual = new Date().getFullYear();

  return (
    <footer>
      <div className="dulces">
        <img src={logo} width="100" height="100" alt="JOYSWEETS" />
        <h5>Dulces Emociones</h5>
      </div>
      <div className="legal">
        <Link to="/legal">
          Aviso legal
        </Link>
        <Link to="/privacidad">
          Términos de Uso y Política de Privacidad
        </Link>
        <Link to="/cookies">
          Política de Cookies
        </Link>
        <div className="copyright">
          &copy; JOYSWEETS {fechaActual}
        </div>
      </div>
    </footer>
  );
};
