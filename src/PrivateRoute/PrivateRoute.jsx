/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return <div>{children}</div>;
}
