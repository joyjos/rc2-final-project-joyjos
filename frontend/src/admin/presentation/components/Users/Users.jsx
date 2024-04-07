import "./Users.css";

import { useEffect, useContext } from "react";
import { UserContext } from "../../../../middleware/context/UserContext";

export const Users = () => {
  const { users, getUserRoles, userRoles } = useContext(UserContext);

  useEffect(() => {
    users.forEach((user) => {
      getUserRoles(user.id);
    });
  }, [users, getUserRoles]);

  return (
    <main className="row animated fadeIn">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="text-right"></div>
              <h3 className="card-title">
                Usuarios (<small>{users.length}</small>)
              </h3>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>Nombre</th>
                    <th style={{ width: "20%" }}>Apellidos</th>
                    <th style={{ width: "32%" }}>Email</th>
                    <th style={{ width: "13%" }}>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{userRoles[user.id] ? userRoles[user.id].role : "Cargando..."}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
