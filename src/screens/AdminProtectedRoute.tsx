import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function AdminProtectedRoute() {
  const token = localStorage.getItem('adminToken');

  return !token ? <Navigate to="/admin/" replace /> : <Outlet />;
}
