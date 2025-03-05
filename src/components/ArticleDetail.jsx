import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import ArticleService from "../service/articleService";
import { useEffect } from "react";
import moment from "moment";
import Loader from "../ui/Loader";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail } = useSelector((state) => state.article);

  const articlesDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response));
    } catch (error) {
      console.log(error);
    }
  };

  //ddwed

  useEffect(() => {
    articlesDetail();
  }, [slug]);

  return articleDetail === null ? (
    <Loader />
  ) : (
    <div className="p-5 mb-4 rounded-3">
      <div className="container-fluid py-5">
        <h1 className="col-md-8 fw-bold">{articleDetail.article.title}</h1>
        <p className="col-md-8 fs-5">{articleDetail.article.description}</p>
        <p className="text-muted">
          <span className="fw-bold">created at: </span>
          {moment(articleDetail.article.createdAt).format("MMMM Do YYYY")}
        </p>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={articleDetail.article.author.image}
                className="img-fluid rounded-start"
                alt={""}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-capitalize text-primary">
                  {articleDetail.article.author.username}
                </h5>
                <p className="card-text">{articleDetail.article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>{articleDetail.article.body}</div>
      </div>
    </div>
  );
}

export default ArticleDetail;
