import { useNavigate, Link } from "react-router-dom";
// import Sign from './SignUp'

export default function Navbar() {
  const navigate = useNavigate();

  function Sign() {
    navigate("/signup");
  }
  function LogIn() {
    navigate("/");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link id="navlink" to="/home">
              Home
            </Link>
            <Link id="navlink" to="/about">
              About
            </Link>
            <Link id="navlink" to="/contact">
              Contact
            </Link>
            <Link id="navlink" to="/projects">
              Projects
            </Link>
          </ul>
          <div className="d-grid me-2">
            <button className="btn btn-primary" onClick={LogIn}>
              Log In
            </button>
          </div>
          <div className="d-grid me-2">
            <button className="btn btn-success" onClick={Sign}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
