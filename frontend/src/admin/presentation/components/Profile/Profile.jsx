import { useState, useEffect, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { UserContext } from "../../../../middleware/context/UserContext";

export const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { selectedUser } = useContext(UserContext);

//   useEffect(() => {
//     const fetchUser= async () => {
//       try {
//         await getUserById(id);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };
//     fetchUser();
//   }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  if (!selectedUser) {
    return null;
  }


  return (
    <main className="admin-login animated fadeIn">
      <div className="admin-container">
        <h1>Mi cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="p-float-label">
            <InputText
              id="email"
              value={selectedUser.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="p-float-label">
            <InputText
              id="password"
              value={password}
              feedback={false}
              toggleMask
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <Link to="/admin/dashboard">
            <Button type="submit" label="INICIAR SESIÓN" />
          </Link>
        </form>
      </div>
    </main>
  );
};
