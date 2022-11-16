import React, { lazy } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { history } from "./helpers/history.js";
import Loader from "./components/Loader";

// const PrivateRoute = lazy(() => import("./PrivateRoute"));
// const Login = lazy(() => import("./pages/Login.jsx"));
// const Tracking = lazy(() => import("./pages/Tracking.jsx"));
// const NotFound = lazy(() => import("./pages/NotFound.jsx"));
// const Dashboard = lazy(() => import("./pages/admin/Dashboard.jsx"));

import { PrivateRoute } from "./PrivateRoute";
import Login from "./pages/Login.jsx";
import Tracking from "./pages/Tracking.jsx";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  // return (
  //   <BrowserRouter>
  //     <Switch>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/notfound" element={<NotFound />} />
  //       <Route path="/tracking" element={<Tracking />} />
  //       <PrivateRoute path="/dashboard" component={<Dashboard />} />
  //       {/* <Route exact path="/faq" component={Faq} />
  //       <Route exact path="/atm" component={ATM} /> */}
  //       {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
  //       <PrivateRoute exact path="/table" component={Table} />
  //       <PrivateRoute exact path="/raffle" component={Raffle} />
  //       <PrivateRoute exact path="/profile" component={UserProfile} /> */}
  //       <Route path="*" element={<NotFound />} />
  //     </Switch>
  //   </BrowserRouter>
  // );
}

export default App;
