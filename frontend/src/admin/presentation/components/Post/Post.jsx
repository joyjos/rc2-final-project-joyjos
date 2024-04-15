import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PostContext } from "../../../../middleware/context/PostContext";
import { Editor } from "../Editor/Editor";
import Swal from "sweetalert2";

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedPost, getPostById, updatePost } = useContext(PostContext);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        await getPostById(id);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    post: "",
    image: null,
  });

  useEffect(() => {
    if (selectedPost) {
      setFormData({
        title: selectedPost.title,
        category: selectedPost.category,
        post: selectedPost.post,
        image: selectedPost.image,
      });
    }
  }, [selectedPost]);

  const handleTextChange = (htmlValue) => {
    setFormData((prevData) => ({
      ...prevData,
      post: htmlValue,
    }));
  };

  // const handleImageChange = (event) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     image: event.target.files[0],
  //   }));
  // };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

  //   if (file && allowedTypes.includes(file.type)) {
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       image: file,
  //     }));
  //   } else {
  //     // Mostrar un mensaje de error al usuario indicando que solo se permiten ciertos tipos de archivos
  //     alert("Por favor, selecciona una imagen válida (JPEG, PNG, GIF)");
  //     // O puedes mostrar un mensaje de error en algún lugar de la interfaz de usuario
  //   }
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: e.target.files[0],
    }));
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpdatePost = async (event) => {
    event.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key === "file") {
          if (formData[key]) {
            formDataToSend.append(key, formData[key]);
          }
        } else {
          formDataToSend.append(key, formData[key] || selectedPost[key]);
        }
      }

      // Verificar los datos antes de enviarlos al servidor
      console.log("formDataToSend:", formDataToSend);

      const response = await updatePost(id, formDataToSend);
      console.log("updatePost response:", response);

      navigate("/admin/posts");
      Swal.fire({
        title: "¡Receta actualizada!",
        html:
          '<span style="color:var(--chocolate); text-decoration:underline; text-decoration-color: var(--special)">' +
          formData.title +
          "</span>",
        icon: "success",
        confirmButtonText: "Cerrar",
      });
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: null,
    }));
  };

  if (!selectedPost) {
    return null;
  }

  return (
    <main className="row animated fadeIn">
      <div className="row">
        {selectedPost && (
          <div className="col-md-12">
            <div className="card card-body">
              <h3 className="box-title m-b-0">Receta</h3>
              <h6 className="card-subtitle">Dulces Emociones</h6>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <form
                    onSubmit={handleUpdatePost}
                    encType="multipart/form-data"
                    className="form-material"
                  >
                    <div className="form-group">
                      <label>Nombre</label>
                      <input
                        name="title"
                        type="text"
                        className="form-control joy"
                        value={formData.title || selectedPost.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Categoría</label>
                      <input
                        name="category"
                        type="text"
                        className="form-control joy"
                        value={formData.category || selectedPost.category}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Receta</label>
                      <div className="card">
                        <Editor
                          value={formData.post || selectedPost.post}
                          onChange={handleTextChange}
                          height
                        />
                      </div>
                    </div>
                    <div className="form-group" id="image-popups">
                      <label>Foto</label>
                      <br />
                      <img
                        src={`http://localhost:8080/api/images/${selectedPost.image}`}
                        alt={selectedPost.title}
                        className="img-200"
                      />
                    </div>
                    <div className="form-group flexar">
                      <label for="file-input" className="custom-file-upload">Cambiar foto</label>
                      <input
                      id="file-input"
                        type="file"
                        name="file"
                        onChange={handleImageChange}
                      />
                      {selectedImage && (
                        <div>
                          <img
                            src={selectedImage}
                            alt="Imagen seleccionada"
                            style={{ maxWidth: "100px" }}
                          />
                          <button className="btn-delete-upload" onClick={handleImageRemove}>Eliminar</button>
                        </div>
                      )}
                    </div>
                    <div className="guardar">
                      <button type="submit" className="btn btn-success m-r-10">
                        Guardar
                      </button>
                      <Link to="/admin/posts" className="btn-delete-upload">
                        Cancelar
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
