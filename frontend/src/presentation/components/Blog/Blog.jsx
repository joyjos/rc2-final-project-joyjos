import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../../middleware/context/PostContext";
import { formatDate, sort, truncate, titlecase } from "../../../helpers/utils";

export const Blog = () => {
  const { posts } = useContext(PostContext);

  return (
    <section className="ae-container-fluid rk-main blog animated fadeIn">
      <article className="ae-container-fluid ae-container-fluid--inner rk-blog">
        <div className="rk-blog__items">
          {sort(posts).map((post) => (
            <div key={post.id} className="rk-blog__item">
              <div
                className="post-img post-1 rk-landscape-alt rk-tosquare"
                style={{ backgroundImage: `url(http://localhost:8080/api/images/${post.image})` }}
              >
                <div className="item-meta">
                  <p>
                    <Link to={`/post/${post.id}`} className="arrow-button">
                      Continuar Leyendo
                      <span className="arrow-cont">
                        <svg>
                          <use xlinkHref="assets/img/symbols.svg#arrow"></use>
                        </svg>
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="blog-info">
                <h2 className="blog-info__title">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p
                  className="blog-info__excerpt"
                  dangerouslySetInnerHTML={{
                    __html: truncate(post.post, 170, true),
                  }}
                ></p>
              </div>
              <div
                className="blog-meta"
              >
                <span className="ae-kappa ae-u-bold blog-meta__date">
                  {formatDate(post.datePost)}
                </span>
                <Link
                  to={`/post/${post.id}`}
                  className="arrow-button blog-meta__read-more"
                >
                  Continuar Leyendo
                  <span className="arrow-cont">
                    <svg>
                      <use xlinkHref="assets/img/symbols.svg#arrow"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
