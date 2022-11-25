import React, { useEffect, useRef } from "react";
import { getImageUrl } from "./../functions";
import LogoImage from "./../assets/logo.png";
import { postLogin } from "./../redux/slices/authenticationSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../helpers/history.js";
import { isObjectEmpty } from "../functions/index.js";

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleLogin(e) {
    e.preventDefault();

    dispatch(postLogin());
  }

  const token = useSelector((state) => state.Authentication.token);
  const data = useSelector((state) => state.Authentication.data);
  const lsData = JSON.parse(localStorage.getItem('userData'));
  
  useEffect(() => {
    
    if (!isObjectEmpty(lsData)) {
      history.navigate("/");
    }
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("userData", JSON.stringify(data));
      if (token && data) {
        history.navigate("/");
      }
    }
  }, [token, data]);

  return (
    <div
      className="bg-cover bg-center w-screen h-screen grid place-items-center"
      style={{ backgroundImage: "url(/bg-full.jpeg)" }}
    >
      <div className="lg:w-1/3 lg:h-[45%] bg-white p-5 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm mx-auto">
        <div className="flex flex-col justify-items-center">
          <section className="grid justify-items-center mb-3">
            <img src={LogoImage} className="w-28 h-auto text-center" />
          </section>
          <div className="header-card flex flex-col justify-center items-center font-medium text-xl">
            <p>Layanan Surat</p>
            <p>Pemkot Bitung</p>
          </div>
        </div>
        <form className="grid gap-y-4 p-5" method="POST" onSubmit={handleLogin}>
          <div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                required
                placeholder="Email"
                ref={emailRef}
                // aria-describedby="email-error"
              />
              {/* <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div> */}
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="email-error">
              Please include a valid email address so we can get back to you
            </p>
          </div>
          {/* <!-- End Form Group --> */}

          {/* <!-- Form Group --> */}
          <div>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 "
                required
                ref={passwordRef}
                placeholder="Password"
                // aria-describedby="password-error"
              />
              {/* <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div> */}
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="password-error">
              8+ characters required
            </p>
          </div>
          {/* <!-- End Form Group --> */}

          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
