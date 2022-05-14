import { useLocation, Navigate ,Outlet} from "react-router-dom";
// import Login from "./Login";
// import SignUp from './SignUp';
// import AllNav from "./AllNav";

function WithoutLogin() {
  const user = localStorage.getItem("user");
  const location = useLocation();

  return user ? 
    <Navigate to="/dashboard" state={{ from: location }} replace />  :  <Outlet />
    
  


}
export default WithoutLogin;
