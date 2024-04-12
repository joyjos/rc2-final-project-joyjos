import { useState } from "react";
import './ToggleMenu.css';
import { Link } from 'react-router-dom';

export const ToggleMenu = () => {
  const [subMenu1Visible, setSubMenu1Visible] = useState(false);

  const toggleSubMenu1 = () => {
    setSubMenu1Visible(!subMenu1Visible);
  };

  return (
    <div>

      <div className="menu-item" onClick={toggleSubMenu1}>Recetas</div>
      <div className={`submenu ${subMenu1Visible ? 'active' : ''}`}>
        <ul>
          <Link to="/admin/posts"><li>Ver Recetas</li></Link>
          <Link to="/admin/post"><li>Crear receta</li></Link>
        </ul>
      </div>
    </div>
  );
}