import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const token = localStorage.getItem('token');

  return !token ? <Navigate to="/auth" replace /> : <Outlet />;
}
