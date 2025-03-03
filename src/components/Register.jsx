import { useEffect, useState } from "react";
import { Input } from "../ui";
import { useSelector, useDispatch } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/authService";
import ValidationError from "./ValidationError";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { username, email, password };
    try {
      const response = await AuthService.userRegister(user);
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
        onSubmit={(e) => handleRegister(e)}
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
        <h1 className="h3 mb-3 fw-normal">Please register</h1>
        <ValidationError />
        <Input
          label={"Username"}
          id={"username"}
          state={username}
          setState={setUsername}
        />
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
          {isLoading ? "loader..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
