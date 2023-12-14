import { useAuth } from "../../context/authContext/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


export const ProtectedRoute = ({ children }) => {
  const { authToken } = useAuth();
  return authToken ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};
