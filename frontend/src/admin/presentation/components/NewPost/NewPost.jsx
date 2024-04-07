import "./NewPost.css";
import { useState, useContext } from "react";
import { PostContext } from "../../../../middleware/context/PostContext";
import { Editor } from "../Editor/Editor";

export const NewPost = () => {
  const [text, setText] = useState("");

  const { createPost } = useContext(PostContext);

  const handleTextChange = (htmlValue) => {
    setText(htmlValue);
  };

  const handleCreatePost = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', event.target.title.value);
    formData.append('post', event.target.post.value);
    formData.append('image', event.target.image.files[0]);
    formData.append('category', event.target.category.value);

    await createPost(formData);
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
                      className="form-control joy"
                      placeholder="Nombre"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Categoría</label>
                    <input
                      name="category"
                      type="text"
                      className="form-control joy"
                      placeholder="Categoría"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Receta</label>
                    <input type="text" name="post" />
                  </div>
                  <div className="form-group">
                    <label>Elige una foto</label>
                    <div
                      className="fileinput fileinput-new input-group"
                      data-provides="fileinput"
                    >
                      <div className="form-control" data-trigger="fileinput">
                        <i className="glyphicon glyphicon-file fileinput-exists"></i>
                        <span className="fileinput-filename"></span>
                      </div>
                      <span className="input-group-addon btn btn-default btn-file">
                        <span className="fileinput-new">
                          Selecciona archivo
                        </span>
                        <span className="fileinput-exists">Cambiar</span>
                        <input
                          type="file"
                          name="image" /*onChange={uploadFile}*/
                        />
                      </span>
                      <a
                        href="#"
                        className="input-group-addon btn btn-default fileinput-exists"
                        data-dismiss="fileinput"
                      >
                        Eliminar
                      </a>
                    </div>
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
