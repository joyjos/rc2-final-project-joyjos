import { useContext } from "react";

export const Recipe = () => {
  const { posts } = useContext(PostContext);
  return (
    <section className="ae-container-fluid rk-main">
      <section className="ae-container-fluid ae-container-fluid--inner rk-portfolio">
        <div className="animated fadeIn ae-masonry ae-masonry-md-2 ae-masonry-xl-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/receta/${post.id}`}
              className="rk-item ae-masonry__item"
            >
              <img src={post.image} alt={post.title} />
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
