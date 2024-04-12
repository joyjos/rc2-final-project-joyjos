import "./NewPost.css";
import { useState, useContext } from "react";
import { PostContext } from "../../../../middleware/context/PostContext";
import { Editor } from "../Editor/Editor";
import { FileUpload } from 'primereact/fileupload';
        

const initialFormData = {
  title: "",
  post: "",
  file: null,
  category: "",
};

export const NewPost = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedImage, setSelectedImage] = useState(null);
  const { createPost } = useContext(PostContext);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
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

  const handleContentChange = (content) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      post: content,
    }));
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: null,
    }));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (formData.file) {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("post", formData.post);
      formDataToSend.append("file", formData.file);
      formDataToSend.append("category", formData.category);
      console.log(formDataToSend);
      createPost(formDataToSend);
      setFormData(initialFormData);
      setSelectedImage(null);
    }
  };

  return (
    <main className="row animated fadeIn">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body">
            <h3 className="box-title m-b-0">Receta</h3>
            <h6 className="card-subtitle">Dulces Emociones</h6>
            <div className="row">
              <div className="col-sm-12 col-xs-12">
                <form
                  onSubmit={handleCreatePost}
                  encType="multipart/form-data"
                  className="form-material"
                >
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      name="title"
                      type="text"
                      value={formData.title}
                      className="form-control joy"
                      placeholder="Nombre"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Categoría</label>
                    <input
                      name="category"
                      type="text"
                      value={formData.category}
                      className="form-control joy"
                      placeholder="Categoría"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Receta</label>
                    <Editor
                      name="post"
                      value={formData.post}
                      onChange={handleContentChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Elige una foto</label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleImageChange}
                    />
                    {selectedImage && (
                      <div>
                        <img src={selectedImage} alt="Imagen seleccionada" style={{ maxWidth: "100px" }} />
                        <button onClick={handleImageRemove}>Eliminar</button>
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success waves-effect waves-light m-r-10"
                  >
                    <i className="fa fa-save"></i> Guardar
                  </button>
                  <a
                    href="/admin/posts"
                    className="btn btn-inverse waves-effect waves-light"
                  >
                    Cancelar
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
