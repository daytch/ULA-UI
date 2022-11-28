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

    dispatch(
      postLogin({
        username: emailRef.current.value,
        password: passwordRef.current.value,
      })
    );
  }

  const token = useSelector((state) => state.Authentication.token);
  const data = useSelector((state) => state.Authentication.data);
  const lsData = JSON.parse(localStorage.getItem("userData"));

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
              />
            </div>
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
              />
            </div>
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
