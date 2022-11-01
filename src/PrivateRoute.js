import React from "react";
import { Route /*, Redirect,useLocation*/ } from "react-router-dom";
import NavbarAdmin from "components/NavbarAdmin";
import Sidebar from "components/Sidebar";
import { isObjectEmpty } from "./functions";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const redirectToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <Route {...rest}>
      {
        !isObjectEmpty(userData) ? (
          <>
            <NavbarAdmin />
            <Sidebar />
            <div className="flex min-w-screen min-h-screen overflow-y-hidden bg-[url('assets/img/logo-corner.png')] max-w-content bg-no-repeat bg-right-bottom">
              <div className="flex min-w-screen lg:ml-56 mt-4 lg:p-24 pt-24 lg:pr-5">
                <Component />
              </div>
            </div>
          </>
        ) : (
          redirectToLogin()
        )
        // (
        //   <Redirect to={{ pathname: "/login", state: { from: location } }} />
        // )
      }
    </Route>
  );
};

export default PrivateRoute;
