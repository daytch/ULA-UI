import React, { lazy } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { history } from "./helpers/history.js";

import { PrivateRoute } from "./PrivateRoute";
import Login from "./Pages/Login";
import Tracking from "./Pages/Tracking";
import NotFound from "./Pages/NotFound";
import Admin from "./Pages/Admin/Admin";
import Create from "./Pages/Create";
import InputSurat from "./Pages/Admin/InputSurat";

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
