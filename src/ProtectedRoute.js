// ProtectedRoute.js

import React from "react";
import { Navigate } from "react-router-dom";
import { useAccount } from "wagmi";

const ProtectedRoute = ({ children }) => {
  const { isConnected } = useAccount();

  console.log("Is Connected:", isConnected); // Temporary log for debugging

  if (!isConnected) {
    return <Navigate to="/wallet" />;
  }

  return children;
};

export default ProtectedRoute;
