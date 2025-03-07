import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "./index";
import ArticleService from "../service/articleService";
import { useDispatch } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleFailure,
  postArticleStart,
  postArticleSuccess,
} from "../slice/article";
import { useEffect, useState } from "react";

function EditArticle() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const articleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response));
      setTitle(response.article.title);
      setDescription(response.article.description);
      setBody(response.article.body);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    articleDetail();
  }, []);

  const formSubmit = async () => {
    const article = { title, description, body };
    dispatch(postArticleStart());
    try {
      await ArticleService.editArticle(slug, article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(postArticleFailure());
    }
  };

  return (
    <div className="text-center pt-5">
      <h2 className="pb-3">Edit article</h2>
      <ArticleForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        body={body}
        setBody={setBody}
        formSubmit={formSubmit}
      />
    </div>
  );
}

export default EditArticle;
