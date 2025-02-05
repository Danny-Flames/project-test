import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const authToken = localStorage.getItem("authToken");

  return authToken ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
