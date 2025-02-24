import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, []);
  return <div>Main</div>;
}

export default Main;
