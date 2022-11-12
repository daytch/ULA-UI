import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/Loader";

const Login = lazy(() => import("./pages/login.jsx"));
const Tracking = lazy(() => import("./pages/tracking.jsx"));
const Notfound = lazy(() => import("./pages/notfound.jsx"));
const Dashboard = lazy(() => import("./pages/admin/dashboard.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" component={LandingPage} />
        <Route exact path="/confirm" component={Confirmation} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/faq" component={Faq} />
        <Route exact path="/atm" component={ATM} /> */}
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/table" component={Table} />
        <PrivateRoute exact path="/raffle" component={Raffle} />
        <PrivateRoute exact path="/profile" component={UserProfile} /> */}
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
