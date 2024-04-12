import './Recipe.css';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../../middleware/context/PostContext';
import { formatDate } from '../../../helpers/utils';

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

  return (
    <section className={selectedPost ? "ae-container-fluid ae-container-fluid--full" : ""}>
      {selectedPost && (
        <header
          className="animated fadeIn rk-portfolio-cover post-inside-1"
          style={{ backgroundImage: `url(http://localhost:8080/api/images/${selectedPost.image})` }}
        >
          <div className="item-inside__meta">
            <h1 className="bgTitle ae-u-bolder rk-portfolio-title">{selectedPost.title}</h1>
            <p className="ae-theta rk-portfolio-category">
              <span className="bgCategory ae-u-bolder">{selectedPost.category}</span>
            </p>
            <p className="ae-kappa ae-u-bold rk-portfolio-inner-date">
              {formatDate(selectedPost.datePost)}
            </p>
          </div>
        </header>
      )}
      {selectedPost && (
        <div className="ae-container-fluid ae-container-fluid--inner rk-portfolio--inner">
          <div className="ae-grid ae-grid--collapse au-xs-ptp-1 au-xs-pbp-1">
            <div className="ae-grid__item--alt item-lg-12 justify">
              <div dangerouslySetInnerHTML={{ __html: selectedPost.post }} />
            </div>
          </div>
          <div className="ae-grid ae-grid--collapse au-xs-ptp-1">
            <div className="ae-grid__item item-lg-12" />
          </div>
        </div>


      )}
    </section>
  )
}
