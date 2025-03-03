import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../ui/Loader";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const { articles, isLoading } = useSelector((state) => state.article);

  return (
    <div className="album py-5">
      {isLoading ? <Loader /> : <></>}

      <div className="container p-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles &&
            articles.map((item) => (
              <div className="col" key={item.slug}>
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
                    <p className="card-text fw-bold m-0">{item.title}</p>
                    <p className="card-text ">{item.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigate(`/article/${item.slug}`);
                        }}
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
                    <small className="text-body-secondary text-capitalize fw-bold">
                      {item.author.username}
                    </small>
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
