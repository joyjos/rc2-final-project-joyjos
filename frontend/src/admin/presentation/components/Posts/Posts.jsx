import "./Posts.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../../../middleware/context/PostContext";
import { Link } from "react-router-dom";
import { sort, truncate } from "../../../../helpers/utils";
import ReactPaginate from "react-paginate";
import { Searcher } from "../../../../presentation/components/Searcher/Searcher";
import Swal from 'sweetalert2';

export const Posts = () => {
  const { posts, deletePost } = useContext(PostContext);

  const [updatedPosts, setUpdatedPosts] = useState(posts);

  const [searchTerm, setSearchTerm] = useState("");
  const onSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
    setPageNumber(0);
  };

  const filteredPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;

  const pagesVisited = pageNumber * itemsPerPage;
  const displayedPosts = sort(filteredPosts).slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  );

  useEffect(() => {
    console.log("Efecto 1: Actualización de posts");
    setUpdatedPosts(posts);
  }, [posts]);

  useEffect(() => {
    console.log("Efecto 2: Actualización de updatedPosts");
    setPageNumber(0);
  }, [updatedPosts]);

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar esta receta?",
      html: '<span style="color:var(--chocolate); text-decoration:underline; text-decoration-color: var(--special)">'+posts.find(post => post.id === id).title+'</span>',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(id);
        console.log("ID del post a eliminar:", id);
      console.log("Posts después de eliminar:", posts);
      const updatedPostsAfterDeletion = posts.filter((post) => post.id !== id);
      console.log("Updated posts después de eliminar:", updatedPostsAfterDeletion);
      setUpdatedPosts(updatedPostsAfterDeletion);
        Swal.fire(
          "Eliminada",
          "La receta ha sido eliminada",
          "success"
        );
      }
    });
  };

  // const handleUpdatePost = async (updatedPost) => {
  //   try {
  //     await updatePost(updatedPost.id, updatedPost);
  //     setUpdatedPosts(
  //       updatedPosts.map((post) =>
  //         post.id === updatedPost.id ? updatedPost : post
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error updating post:", error);
  //   }
  // };

  const showPagination =
    filteredPosts.length > 0 && filteredPosts.length > itemsPerPage;

  return (
    <main className="row container-posts animated fadeIn">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <Searcher
                searchTerm={searchTerm}
                onSearchTermChange={onSearchTermChange}
              />
              <div className="text-right">
                <Link to="/admin/post">
                  <button
                    type="button"
                    className="btn btn-primary"
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
                  {displayedPosts.map((post) => (
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
      {showPagination && (
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={Math.ceil(filteredPosts.length / itemsPerPage)}
          onPageChange={(selected) => {
            setPageNumber(selected.selected);
          }}
          containerClassName={"pagination"}
          previousClassName={"previous"}
          nextClassName={"next"}
          pageClassName={"page-item"}
          activeClassName={"active"}
        />
      )}
    </main>
  );
};
