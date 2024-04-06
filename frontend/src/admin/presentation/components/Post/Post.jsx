import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../../../middleware/context/PostContext';

export const Post = () => {

  const { id } = useParams();

  const { selectedPost, getPostById } = useContext(PostContext);

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
                <form /*onSubmit={actualizarPost}*/ className="form-material">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      name={selectedPost.title}
                      type="text"
                      className="form-control joy"
                      value={selectedPost.title}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Categoría</label>
                    <input
                      name="categoria"
                      type="text"
                      className="form-control joy"
                      value={selectedPost.category}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Receta</label>
                    {/* <ckeditor editor={Editor} name="post" required></ckeditor> */}
                  </div>
                  <div className="form-group" id="image-popups">
                    <label>Foto</label>
                    <br />
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="img-200"
                    />
                  </div>
                  <div className="form-group">
                    <label>Cambiar foto</label>
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
                        <input type="file" name="..." /*onChange={uploadFile}*/ />
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
      )}
    </div>
    </main>
  );
};
