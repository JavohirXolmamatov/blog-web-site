import { useState } from "react";
import ArticleForm from "./ArticleForm";
import ArticleService from "../service/articleService";
import { useDispatch } from "react-redux";
import {
  postArticleStart,
  postArticleSuccess,
  postArticleFailure,
} from "../slice/article";
import { useNavigate } from "react-router-dom";
function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const article = { title, description, body };

  const formSubmit = async () => {
    dispatch(postArticleStart());
    try {
      await ArticleService.postArticle(article);
      dispatch(postArticleSuccess());
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(postArticleFailure());
    }
  };

  return (
    <div className="w-75 mx-auto pt-3">
      <h2 className="text-center mt-3">Create article</h2>
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

export default CreateArticle;
