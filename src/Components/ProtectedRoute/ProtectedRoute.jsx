import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../context/auth.context";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  // console.log(pathname);

  if (token === null) {
    return <Navigate to={"/login"} state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
