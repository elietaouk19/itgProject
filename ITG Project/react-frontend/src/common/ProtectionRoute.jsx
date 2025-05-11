import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useToken } from './TokenContext';

const ProtectedRoute = ({ children }) => {
  const { bearerToken, updateToken } = useToken();

  useEffect(() => {
    if (!bearerToken && localStorage.getItem("token")) {
      updateToken(localStorage.getItem("token"));
    }
  }, [bearerToken, updateToken]);

  if (!bearerToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
