import React, { useEffect, useRef, useState } from "react";
import { getImageUrl, isObjectEmpty } from "./../../functions";
import LogoImage from "../../assets/logo.png";
import { postLogin } from "./../../redux/slices/authenticationSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../helpers/history.js";
import Axios from "axios";
import { nikParser } from "nik-parser";

const InputSurat = () => {
  const dispatch = useDispatch();
  const namaRef = useRef();
  const nikRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const tujuanRef = useRef();
  const judulRef = useRef();
  const [url, setUrl] = useState("");
  const [error, setError] = useState({
    nik: !false,
    nama: !false,
    hp: !false,
    email: !false,
    tujuan: !false,
    judul: !false,
    lampiran: !false,
  });

  function handleLogin(e) {
    e.preventDefault();
    let pl = {
      nik: "3071236239",
      nama: "Fauzi",
      no_hp: "089635781185",
      email: "njicker@gmail.com",
      tujuan: "Peminjaman Ruangan",
      judul: "Acara Bersih Kota",
      lampiran: "inilampiran.zip",
      status: "A",
    };
    dispatch(postLogin());
  }

  const changeUploadFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "pemkot_bitung");

    Axios.post(
      "https://api.cloudinary.com/v1_1/daytch/image/upload",
      formData
    ).then((res) => {
      setUrl(res.data["secure_url"]);
    });
  };

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
        // window.location.href = "/";
        history.navigate("/");
      }
    }
  }, [token, data]);

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-[#F3F4F6] lg:w-1/2">
      <div className="flex flex-row justify-center items-center border-b-[1px] border-black">
        <img src={LogoImage} className="w-20 h-auto inline" />
        <p className="header-card font-medium text-xl ml-4">
          Layanan Surat Pemkot Bitung
        </p>
      </div>
      <form className="grid gap-y-4 p-5" method="POST" onSubmit={handleLogin}>
        <div>
          <div className="relative">
            <input
              type="text"
              id="nama"
              name="nama"
              className="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              placeholder="Silahkan input Nama"
              ref={namaRef}
            />
            {error.nama ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {error.nama ? (
            <p className="flex text-xs text-red-600 mt-2" id="nama-error">
              Nama pengirim wajib diisi.
            </p>
          ) : null}
        </div>

        <div>
          <div className="relative">
            <input
              type="number"
              id="nik"
              name="nik"
              className="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              ref={nikRef}
              placeholder="Silahkan input NIK"
            />
            {error.nik ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {error.nik ? (
            <p className="flex text-xs text-red-600 mt-2" id="nik-error">
              NIK kosong / tidak valid, mohon cek kembali NIK anda.
            </p>
          ) : null}
        </div>

        <div>
          <div className="relative">
            <input
              type="number"
              id="phone"
              name="phone"
              className="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              ref={phoneRef}
              placeholder="Silahkan input No HP (aktif WA)"
            />
            {error.hp ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {error.hp ? (
            <p className="flex text-xs text-red-600 mt-2" id="phone-error">
              No Hp wajib diisi.
            </p>
          ) : null}
        </div>

        <div>
          <div className="relative">
            <input
              type="text"
              id="tujuan"
              name="tujuan"
              className="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              ref={tujuanRef}
              placeholder="Silahkan input Tujuan Surat"
            />
            {error.tujuan ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {error.tujuan ? (
            <p className="flex text-xs text-red-600 mt-2" id="tujuan-error">
              Tujuan surat wajib diisi.
            </p>
          ) : null}
        </div>

        <div>
          <div className="relative">
            <input
              type="text"
              id="judul"
              name="judul"
              className="py-2 px-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              ref={judulRef}
              placeholder="Silahkan input Judul Surat"
            />
            {error.judul ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {error.judul ? (
            <p className="flex text-xs text-red-600 mt-2" id="judul-error">
              Judul surat wajib diisi.
            </p>
          ) : null}
        </div>

        <div>
          <div className="relative">
            <label htmlFor="small-file-input" className="sr-only">
              Choose file
            </label>
            <input
              onChange={changeUploadFile}
              type="file"
              name="small-file-input"
              id="small-file-input"
              className="bg-white block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
            />
            {error.lampiran ? (
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                <svg
                  className="h-5 w-5 text-red-500"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </div>
            ) : null}
          </div>
          {error.lampiran ? (
            <p className="flex text-xs text-red-600 mt-2" id="small-file-input-error">
              Lampiran wajib diisi.
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-8 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputSurat;
