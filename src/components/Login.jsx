import { useEffect, useState } from "react";
import { Input } from "../ui";
import { useDispatch } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import { useSelector } from "react-redux";
import AuthService from "../service/authService";
import ValidationError from "./ValidationError";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response.data));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="w-100" style={{ height: "80dvh" }}>
      <form
        className="w-25 h-100 m-auto d-flex flex-column justify-content-center"
        onSubmit={(e) => handleLogin(e)}
      >
        <img
          src="https://i.imgur.com/W816azR.jpeg"
          title="source: imgur.com"
          style={{
            width: "40px",
            height: "40px",
            borderTopLeftRadius: "20%",
            borderBottomLeftRadius: "20%",
            borderTopRightRadius: "20%",
            marginBottom: "10px",
          }}
        />
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>
        <ValidationError />
        <Input
          type="email"
          label={"Email address"}
          id={"emailAddress"}
          state={email}
          setState={setEmail}
        />
        <Input
          type="password"
          label={"Password"}
          id={"password"}
          state={password}
          setState={setPassword}
        />

        <button
          className="btn btn-primary w-100 py-2 mt-3"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
