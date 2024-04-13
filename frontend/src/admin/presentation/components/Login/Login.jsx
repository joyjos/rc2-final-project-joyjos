import "./Login.css";
import logo from "../../../../presentation/assets/img/JOYSWEETS.svg";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Link } from "react-router-dom";

const fechaActual = new Date().getFullYear();

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Recordar sesión:", rememberMe);
  };

  return (
    <main className="admin-login animated fadeIn">
      <div className="admin-container">
        <img src={logo} width="70" height="70" alt="JOYSWEETS" />
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="p-float-label">
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="p-float-label">
            <Password
              id="password"
              value={password}
              feedback={false}
              toggleMask
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="p-field-checkbox">
            <Checkbox
              inputId="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.checked)}
            />
            <label htmlFor="rememberMe">Recuérdame</label>
          </div>
          <Link to="/admin/dashboard">
            <Button type="submit" label="INICIAR SESIÓN" />
          </Link>
          <div className="remember-container">
            ¿Olvidaste tu contraseña?
            <Link to="/admin/register">¿No tienes una cuenta? Inscríbete</Link>
          </div>
        </form>
        <div className="footer-admin">
          &copy; JOYSWEETS {fechaActual}
        </div>
      </div>
    </main>
  );
};
