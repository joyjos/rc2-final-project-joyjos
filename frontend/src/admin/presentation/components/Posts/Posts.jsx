import "./Posts.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { PostContext } from "../../../../middleware/context/PostContext";
import { Link } from "react-router-dom";
import { truncate } from "../../../../helpers/utils";


export const Posts = () => {
  const { posts } = useContext(PostContext);

  console.log(posts);

  return (
    <main className="row animated fadeIn">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="text-right">
                <Link to="/admin/post">
                  <button
                    type="button"
                    className="btn waves-effect waves-light btn-primary position"
                  >
                    <i className="fa fa-plus"></i> Crear Receta
                  </button>
                </Link>
              </div>
              <h3 className="card-title">
                Recetas (<small>{posts.length}</small>)
              </h3>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>Nombre</th>
                    <th style={{ width: "5%" }}>Categoría</th>
                    <th style={{ width: "52%" }}>Receta</th>
                    <th style={{ width: "10%" }}>Foto</th>
                    <th style={{ width: "13%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.category}</td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: truncate(post.post, 130, true),
                        }}
                      ></td>
                      <td id="image-popups">
                        <img
                          src={post.image}
                          className="img-responsive img-thumbnail img-50"
                          alt={post.title}
                        />
                      </td>
                      <td>
                        <Link to={`/admin/post/${post.id}`}>
                          <button
                            className="btn btn-primary m-r-10"
                            title="Modificar esta receta"
                          >
                            <FaEdit size={20} color="var(--chocolate)" />
                          </button>
                        </Link>
                        <button
                          onClick={() => borrarPost(post)}
                          className="btn btn-danger"
                          title="Eliminar esta receta"
                        >
                          <FaTrash size={20} color="var(--chocolate)" />
                        </button>
                      </td>
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
