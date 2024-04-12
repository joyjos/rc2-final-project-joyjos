import "./Posts.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../../../middleware/context/PostContext";
import { Link } from "react-router-dom";
import { truncate } from "../../../../helpers/utils";

export const Posts = () => {
  const { posts, deletePost } = useContext(PostContext);

  const [updatedPosts, setUpdatedPosts] = useState(posts);

  useEffect(() => {
    setUpdatedPosts(posts);
  }, [posts]);

  const handleDeletePost = (id) => {
    deletePost(id);
    setUpdatedPosts(updatedPosts.filter((post) => post.id !== id));
  };

  return (
    <main className="row container-posts animated fadeIn">
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
              <div className="text-right">
                <Link to="/admin/post">
                  <button
                    type="button"
                    className="btn waves-effect waves-light btn-primary"
                  >
                    Crear Receta
                  </button>
                </Link>
              </div>
              <h3 className="card-title">
                Recetas (<small>{updatedPosts.length}</small>)
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
                  {updatedPosts.map((post) => (
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
                          src={`http://localhost:8080/api/images/${post.image}`}
                          className="img-responsive img-thumbnail img-50"
                          alt={post.title}
                        />
                      </td>
                      <td>
                        <Link to={`/admin/post/${post.id}`}>
                          <button
                            className="btn m-r-10 space special"
                            title="Modificar esta receta"
                          >
                            <FaEdit size={20} className="special" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="btn special"
                          title="Eliminar esta receta"
                        >
                          <FaTrash size={20} className="special" />
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
