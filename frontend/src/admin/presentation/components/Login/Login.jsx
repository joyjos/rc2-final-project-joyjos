import "./Login.css";
import logo from "../../../../presentation/assets/img/JOYSWEETS.svg";
import { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../middleware/context/AuthContext";
import Swal from "sweetalert2";

const fechaActual = new Date().getFullYear();

export const Login = () => {
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Recordar sesión:", rememberMe);

    try {
    await login(email, password);

    Swal.fire({
      title: "¡Bienvenido!",
      text:"Has iniciado sesión",
      icon: "success",
      confirmButtonText: "Cerrar",
    });

    navigate("/admin/dashboard");
  } catch (error) {
    console.error(error);

    Swal.fire({
      title: "Error",
      text: "Ha ocurrido un error al iniciar sesión. Por favor, intenta nuevamente.",
      icon: "error",
      confirmButtonText: "Cerrar",
    });
  }
}

  return (
    <main className="admin-login animated fadeIn">
      <div className="admin-container">
        <Link to="/">
          <img src={logo} width="70" height="70" alt="JOYSWEETS" />
        </Link>
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="p-float-label">
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="p-float-label">
            <Password
              id="password"
              className="contrasena"
              value={password}
              feedback={false}
              toggleMask
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="p-field-checkbox">
            <Checkbox
              inputId="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.checked)}
              required
            />
            <label htmlFor="rememberMe">Recuérdame</label>
          </div>
          <Button type="submit" label="INICIAR SESIÓN" />
          <div className="remember-container">
            ¿Olvidaste tu contraseña?
            <Link to="/admin/register">¿No tienes una cuenta? Inscríbete</Link>
          </div>
        </form>
        <div className="footer-admin">&copy; JOYSWEETS {fechaActual}</div>
      </div>
    </main>
  );
};
