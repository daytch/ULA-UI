import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { history } from "./helpers/history.js";

import { PrivateRoute } from "./PrivateRoute";
// import Login from "./pages/Login";
// import Tracking from "./pages/Tracking";
// import NotFound from "./pages/NotFound";
// import Admin from "./pages/Admin/Admin";
// import Create from "./pages/Create";
// import InputSurat from "./pages/Admin/InputSurat";

const Login = React.lazy(() => import("./pages/login"));
const Tracking = React.lazy(() => import("./pages/tracking"));
const NotFound = React.lazy(() => import("./pages/notfound"));
const Admin = React.lazy(() => import("./pages/admin/admin"));
const Create = React.lazy(() => import("./pages/create"));
const InputSurat = React.lazy(() => import("./pages/admin/inputsurat"));

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();
  // console.log("history:", history);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
