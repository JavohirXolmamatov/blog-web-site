import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/Loader";
import { useNavigate } from "react-router-dom";
import ArticleService from "../service/articleService";
import {
  getArticleFailure,
  getArticleStart,
  getArticleSuccess,
} from "../slice/article";
import ArticleCard from "./ArticleCard";

function Main() {
  const navigate = useNavigate();
  const { articles, isLoading } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  const getArticle = async () => {
    dispatch(getArticleStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticleSuccess(response.articles));
    } catch (error) {
      dispatch(getArticleFailure(error));
    }
  };

  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="album py-5">
      {isLoading ? <Loader /> : <></>}

      <div className="container p-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles &&
            articles.map((item) => (
              <ArticleCard
                item={item}
                deleteArticle={deleteArticle}
                key={item.slug}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
