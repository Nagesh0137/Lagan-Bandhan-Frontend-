import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminRoute } from "./routes/admin";
import { UserRoute } from "./routes/user";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
