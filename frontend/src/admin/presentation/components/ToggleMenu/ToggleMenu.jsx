import { useState } from "react";
import './ToggleMenu.css';
import { Link } from 'react-router-dom';

export const ToggleMenu = () => {
    const [subMenu1Visible, setSubMenu1Visible] = useState(false);
    const [subMenu2Visible, setSubMenu2Visible] = useState(false);
  
    const toggleSubMenu1 = () => {
      setSubMenu1Visible(!subMenu1Visible);
    };
  
    const toggleSubMenu2 = () => {
      setSubMenu2Visible(!subMenu2Visible);
    };

  return (
    <div>
        <div>Mi Perfil</div>
      <div onClick={toggleSubMenu1}>Usuarios</div>
      <div className={`submenu ${subMenu1Visible ? 'active' : 'inactive'}`}>
        <ul>
          <Link to="/admin/users"><li>Ver usuarios</li></Link>
        </ul>
      </div>

      <div onClick={toggleSubMenu2}>Recetas</div>
      <div className={`submenu ${subMenu2Visible ? 'active' : 'inactive'}`}>
        <ul>
        <Link to="/admin/posts"><li>Ver Recetas</li></Link>
        <Link to="/admin/post"><li>Crear receta</li></Link>
        </ul>
      </div>
    </div>
  );
};
