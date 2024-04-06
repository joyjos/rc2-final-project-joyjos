import "./Dashboard.css";
import { HiHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <main className="row animated fadeIn">
      <section className="dashboard">
        <h2>Come Dulces Ama</h2>
        <HiHeart style={{
      fontSize: 20,
    }} />
        <Link to="/admin/posts">
          <button>Recetas</button>
        </Link>
        <Link to="/admin/post">
          <button>Crear recetas</button>
        </Link>
      </section>
    </main>
  );
};
