import { useNavigate, Link } from "react-router-dom";

export default function NavbarDashboard() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("user");
    // alert("User logged out")
    navigate("/");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link id="navlink" to="#">
              Home
            </Link>
            <Link id="navlink" to="#">
              About
            </Link>
            <Link id="navlink" to="#">
              Contact
            </Link>
            <Link id="navlink" to="#">
              Projects
            </Link>
          </ul>
          <div className="d-grid me-2">
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
