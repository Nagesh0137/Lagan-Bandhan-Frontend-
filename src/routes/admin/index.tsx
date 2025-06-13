import { Route, Routes } from "react-router-dom";
import Adminportal from "../../AdminPanel/components/Adminportal";
import Login from "../../AdminPanel/components/LoginPage";
import UserDetailsScreen from "../../AdminPanel/components/PendingUser/UserDetailsScreen";
import UserListScreen from "../../AdminPanel/components/UserListScreen";
import AdminProtectedRoute from "../../screens/AdminProtectedRoute";

export const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AdminProtectedRoute />}>
        <Route path="/home" element={<Adminportal />} />
        <Route path="/userList" element={<UserListScreen status="ACTIVE" />} />
        <Route
          path="/pendingUsers"
          element={<UserListScreen status="PENDING" />}
        />
        <Route path="/userInfo" element={<UserDetailsScreen />} />
      </Route>
      <Route path="*" element={<h1>not found</h1>} />
    </Routes>
  );
};
