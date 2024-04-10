import { useContext } from "react";
import { Link } from 'react-router-dom';
import { PostContext } from '../../../middleware/context/PostContext';

export const Recipes = () => {

  const { posts } = useContext(PostContext);
  
  return (
    <section className="ae-container-fluid rk-main">
      <section className="ae-container-fluid ae-container-fluid--inner rk-portfolio">
        <div className="animated fadeIn ae-masonry ae-masonry-md-2 ae-masonry-xl-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="rk-item ae-masonry__item"
            >
              <img src={`http://localhost:8080/api/images/${post.image}`} alt={post.title} />
              <div className="item-meta">
                <h2>{post.title}</h2>
                <p>{post.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};
