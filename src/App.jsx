import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Main, Navbar, Register } from "./components";
import AuthService from "./service/authService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import LocalStorage from "./helpers Storage/localStorage";
import ArticleService from "./service/articleService";
import {
  getArticleFailure,
  getArticleStart,
  getArticleSuccess,
} from "./slice/article";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.auth);

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getArticle = async () => {
    dispatch(getArticleStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticleSuccess(response.articles));
    } catch (error) {
      dispatch(getArticleFailure(error));
    }
  };

  useEffect(() => {
    const token = LocalStorage.getItemToken("token");
    if (token) {
      getUser();
    }
    getArticle();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
