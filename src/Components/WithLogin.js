import Dashboard from "./Dashboard";
import { useLocation, Navigate } from "react-router-dom";

function WithLogin() {
  const user = localStorage.getItem("user");
  const location = useLocation();

  return user ? (
    <Dashboard />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

}
export default WithLogin;
