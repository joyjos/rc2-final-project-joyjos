import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../../middleware/context/PostContext';

import moment from 'moment/moment';
import 'moment/locale/es';

export const Recipe = () => {

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
    
      const fechaFormateada = moment(selectedPost.datePost).format('LL');

  return (
    <section className={selectedPost ? "ae-container-fluid ae-container-fluid--full" : ""}>
    {selectedPost && (
      <header
        className="animated fadeIn rk-portfolio-cover post-inside-1"
        style={{ backgroundImage: `url(${selectedPost.image})` }}
      >
        <div className="item-inside__meta">
          <h1 className="fondoNombre fondo ae-u-bolder rk-portfolio-title">{selectedPost.title}</h1>
          <p className="ae-theta rk-portfolio-category">
            <span className="fondoCategoria fondo ae-u-bolder">{selectedPost.category}</span>
          </p>
          <p className="ae-kappa ae-u-bold rk-portfolio-inner-date">
            {fechaFormateada}
          </p>
        </div>
      </header>
    )}
    { selectedPost && (
      <div className="ae-container-fluid ae-container-fluid--inner rk-portfolio--inner">
      <div className="ae-grid ae-grid--collapse au-xs-ptp-1 au-xs-pbp-1">
        <div className="ae-grid__item--alt item-lg-12">
			<span className="ae-u-boldest">1.</span> {selectedPost.post}
        </div>
      </div>
	  <div className="ae-grid ae-grid--collapse au-xs-ptp-1">
        <div className="ae-grid__item item-lg-12"></div>
      </div>
    </div>
    )}
  </section>
  )
}
