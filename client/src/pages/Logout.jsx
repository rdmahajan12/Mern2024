import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const { logoutToken } = useAuth();

  useEffect(() => {
    logoutToken();
  }, [logoutToken]);

  return <Navigate to="/login" />;
};

export default Logout;
