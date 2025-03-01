import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import ArticleService from "../service/articleService";
import { useEffect } from "react";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const articleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    articleDetail();
  }, [slug]);

  return <div>id: {slug}</div>;
}

export default ArticleDetail;
