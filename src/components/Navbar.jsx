import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-0 pt-2 pb-2 m-0-auto border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center link-body-emphasis text-decoration-none"
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
          }}
        />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link
          className="me-3 py-2 link-body-emphasis text-decoration-none"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="me-3 py-2 link-body-emphasis text-decoration-none"
          to="/register"
        >
          Register
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
