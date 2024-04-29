import "./Register.css";
import logo from "../../../../presentation/assets/img/JOYSWEETS.svg";
import { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../../../middleware/context/UserContext';
import Swal from "sweetalert2";

const fechaActual = new Date().getFullYear();

export const Register = () => {

  const { createUser } = useContext(UserContext); 

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accept, setAccept] = useState(false);

  const handleCreateUser = async (event) => {
    event.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      const createdUser = await createUser(userData);
      navigate("/admin/");
      Swal.fire({
        title: "¡Usuario creado!",
        html:
          '<span style="color:var(--chocolate); text-decoration:underline; text-decoration-color: var(--special)">' +
          firstName +
          "</span>",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  return (
    <main className="admin-register animated fadeIn">
      <div className="admin-container">
        <Link to="/"><img src={logo} width="70" height="70" alt="JOYSWEETS" /></Link>
        <h1>Regístrate</h1>
        <form onSubmit={handleCreateUser}>
          <div className="p-float-label">
            <InputText
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="firstName">Nombre</label>
          </div>
          <div className="p-float-label">
            <InputText
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="lastName">Apellidos</label>
          </div>
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
              inputId="accept"
              checked={accept}
              onChange={(e) => setAccept(e.checked)}
              required
            />
            <label htmlFor="accept">
              <Link to="/privacidad" target="_blank" className="accept">Estoy de acuerdo con los Términos y Condiciones</Link>
            </label>
          </div>
          <Button type="submit" label="REGÍSTRATE" />
          <div className="remember-container">
            ¿Ya tienes cuenta?<Link to="/admin" className="accept">Entra</Link>
          </div>
        </form>
        <div className="footer-admin">
          &copy; JOYSWEETS {fechaActual}
        </div>
      </div>
    </main>
  );
};
