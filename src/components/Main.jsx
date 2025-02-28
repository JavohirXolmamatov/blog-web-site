import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Main() {
  const { articles } = useSelector((state) => state.article);
  // console.log(articles);

  return (
    <div className="album py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles &&
            articles.map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                  </svg>
                  <div className="card-body">
                    <p className="card-text fw-bold">{item.title}</p>
                    <p className="card-text ">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                        >
                          Delete
                        </button>
                      </div>
                      <small className="text-body-secondary text-capitalatze fw-bold">
                        {item.author.username}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
