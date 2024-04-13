import { Link } from "react-router-dom";
import logo from "../../presentation/assets/img/JOYSWEETS.svg";

export const NoFoundPage = () => {
  const fechaActual = new Date().getFullYear();

  return (
    <main className="error animated fadeIn">
      <div className="error-box">
        <div className="text-center">
        <img src={logo} width="100" height="100" alt="JOYSWEETS" />
          <h1>¡Oops!</h1>
          <h3 className="text-uppercase">¡Página No Encontrada!</h3>
          <p className="text-muted m-t-30 m-b-30">COME DULCES AMA</p>
          <Link to="/" className="button-nofound">
            <button>Ir a la Home</button>
          </Link>
        </div>
        <p className="footer text-center">© {fechaActual} JOYSWEETS</p>
      </div>
    </main>
  );
};
