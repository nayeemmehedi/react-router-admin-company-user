import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ allowedRoles, children }) => {
  const { isAuthenticated, userRoles } = useAuth();

  const location = useLocation();

  const isAuthorized =allowedRoles.length === 0 ||allowedRoles.some((role) => userRoles.includes(role));

  console.log("isAuthenticated",isAuthenticated)
  console.log("isAuthorize",isAuthorized)


  return isAuthenticated && isAuthorized ? (
    children
  ) : (
    <Navigate to="/login"  replace state={{ from: location }} />
  );
};

export default PrivateRoute;