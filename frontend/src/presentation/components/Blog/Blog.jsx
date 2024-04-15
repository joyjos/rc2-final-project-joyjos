import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../../middleware/context/PostContext";
import { formatDate, sort, truncate } from "../../../helpers/utils";
import ReactPaginate from "react-paginate";
import { Searcher } from '../../components/Searcher/Searcher';

export const Blog = () => {
  const { posts } = useContext(PostContext);

  const [searchTerm, setSearchTerm] = useState('');
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

  const showPagination = filteredPosts.length > 0 && filteredPosts.length > itemsPerPage;

  return (
    <>
    
    <section className="ae-container-fluid rk-main blog-container animated fadeIn">
      <article className="ae-container-fluid ae-container-fluid--inner rk-blog">
      <Searcher
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
      />
        <div className="rk-blog__items">
          {displayedPosts.map((post) => (
            <div key={post.id} className="rk-blog__item">
              <div
                className="post-img post-1 rk-landscape-alt rk-tosquare"
                style={{
                  backgroundImage: `url(http://localhost:8080/api/images/${post.image})`,
                }}
              >
                <div className="item-meta">
                  <p>
                    <Link to={`/post/${post.id}`} className="arrow-button blog">
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
                  <Link to={`/post/${post.id}`} className="blog">
                    {post.title}
                  </Link>
                </h2>
                <p
                  className="blog-info__excerpt"
                  dangerouslySetInnerHTML={{
                    __html: truncate(post.post, 170, true),
                  }}
                ></p>
              </div>
              <div className="blog-meta">
                <span className="ae-kappa ae-u-bold blog-meta__date">
                  {formatDate(post.datePost)}
                </span>
                <Link
                  to={`/post/${post.id}`}
                  className="arrow-button blog-meta__read-more blog"
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
    </section>
    </>
  );
};
