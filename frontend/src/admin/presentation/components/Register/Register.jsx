import "./Register.css";
import logo from "../../../../presentation/assets/img/JOYSWEETS.svg";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Link } from "react-router-dom";

const fechaActual = new Date().getFullYear();

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accept, setAccept] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Accept:", accept);
  };

  return (
    <main className="admin-register animated fadeIn">
      <div className="admin-container">
        <img src={logo} width="70" height="70" alt="JOYSWEETS" />
        <h1>Inscribirse</h1>
        <form onSubmit={handleSubmit}>
          <div className="p-float-label">
            <InputText
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="email">Nombre</label>
          </div>
          <div className="p-float-label">
            <InputText
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email">Apellidos</label>
          </div>
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
            <label htmlFor="email">Contraseña</label>
          </div>
          <div className="p-field-checkbox">
            <Checkbox
              inputId="accept"
              checked={accept}
              onChange={(e) => setAccept(e.checked)}
            />
            <label htmlFor="accept">
              Estoy de acuerdo con los Términos y Condiciones
            </label>
          </div>
          <Button type="submit" label="INSCRIBIRSE" />
          <div className="remember-container">
            <Link to="/admin">¿Ya tienes cuenta? Regístrate</Link>
          </div>
        </form>
        <div className="footer-admin">
          Copyright &copy; JOYSWEETS {fechaActual}
        </div>
      </div>
    </main>
  );
};
