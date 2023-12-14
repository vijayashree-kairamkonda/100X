import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(false);
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
