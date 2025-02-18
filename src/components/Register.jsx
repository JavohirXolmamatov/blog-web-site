import { useState } from "react";
import { Input } from "../ui";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-100" style={{ height: "80dvh" }}>
      <form className="w-25 h-100 m-auto d-flex flex-column justify-content-center">
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
        <Input
          label={"Username"}
          id={"username"}
          state={username}
          setState={setUsername}
        />
        <Input
          label={"Email address"}
          id={"emailAddress"}
          state={email}
          setState={setEmail}
        />
        <Input
          label={"Password"}
          id={"password"}
          state={password}
          setState={setPassword}
        />

        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
