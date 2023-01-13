import React, { useEffect, useRef } from "react";
import { getImageUrl } from "./../functions";
import LogoImage from "./../assets/logo.png";
import { postLogin } from "./../redux/slices/authenticationSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../helpers/history.js";
import { isObjectEmpty } from "../functions/index.js";
import Loader from "../components/Loader";
import {
  FingerPrintIcon,
  DocumentArrowUpIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const SelamatDatang = () => {
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
  const loading = useSelector((state) => state.Authentication.loading);
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
    <>
      <Loader isLoading={loading} />
      <div
        className="bg-cover bg-center w-screen h-screen grid place-items-center"
        style={{ backgroundImage: "url(/bg-full.webp)" }}
      >
        <div className="lg:w-1/3 lg:h-[45%] bg-white p-5 rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm mx-auto">
          <div className="flex flex-col justify-items-center">
            <section className="grid justify-items-center mb-3">
              <img src={LogoImage} className="w-28 h-auto text-center" alt="logo" />
            </section>
            <div className="header-card flex flex-col justify-center items-center font-medium text-3xl mb-4">
              <p className="font-light">Selamat Datang</p>
              <p className="font-light">di</p>
              <p className="font-light">Unit Layanan Administrasi</p>
              <p>
                <span className="font-light">Pemerintahan</span>{" "}
                <span className="font-semibold">Kota Bitung</span>
              </p>
            </div>
          </div>
          <div className="flex">
            <a
              href="/create"
              type="button"
              className="w-full mx-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Upload Mandiri
              <DocumentArrowUpIcon className="h-5 w-5" />
            </a>
            <a
              href="/tracking"
              type="button"
              className="w-full mx-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Cek Status Surat
              <MagnifyingGlassIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="flex mt-4 ml-3">
            <a
              href="/login"
              type="button"
              className="w-full mr-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            >
              Admin
              <FingerPrintIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelamatDatang;
