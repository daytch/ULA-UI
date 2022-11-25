import React from "react";
import LogoImage from "./../assets/logo.png";
import InputSurat from "./../assets/icons8-edit.png";
import SuratMasuk from "./../assets/inbox.png";
import SuratKeluar from "./../assets/outbox.png";
import Laporan from "./../assets/analytics.png";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveSidebarMenu } from "../redux/slices/dashboardSlice.js";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.Dashboard.activeSidebarMenu);

  const menuAction = {
    dashboard: () => {
      dispatch(
        changeActiveSidebarMenu({
          dashboard: true,
          input: false,
          masuk: false,
          keluar: false,
          laporan: false,
        })
      );
    },
    input: () => {
      dispatch(
        changeActiveSidebarMenu({
          dashboard: false,
          input: true,
          masuk: false,
          keluar: false,
          laporan: false,
        })
      );
    },
    masuk: () => {
      dispatch(
        changeActiveSidebarMenu({
          dashboard: false,
          input: false,
          masuk: true,
          keluar: false,
          laporan: false,
        })
      );
    },
    keluar: () => {
      dispatch(
        changeActiveSidebarMenu({
          dashboard: false,
          input: false,
          masuk: false,
          keluar: true,
          laporan: false,
        })
      );
    },
    laporan: () => {
      dispatch(
        changeActiveSidebarMenu({
          dashboard: false,
          input: false,
          masuk: false,
          keluar: false,
          laporan: true,
        })
      );
    },
  };

  return (
    <>
      {/* <!-- Sidebar Toggle --> */}
      <div className="sticky top-[59px] inset-x-0 z-20 bg-white border-y px-4 sm:px-6 sm:top-[71px] md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          {/* <!-- Navigation Toggle --> */}
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          {/* <!-- End Navigation Toggle --> */}

          {/* <!-- Breadcrumb --> */}
          <ol
            className="ml-3 flex items-center whitespace-nowrap min-w-0"
            aria-label="Breadcrumb"
          >
            {/* <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
              Application Layout
              <svg
                className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </li> */}
            <li
              className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>
          {/* <!-- End Breadcrumb --> */}
        </div>
      </div>
      {/* <!-- End Sidebar Toggle --> */}

      {/* <!-- Sidebar --> */}
      <div
        id="docs-sidebar"
        className="hs-sidebar hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[48] w-64 bg-white border-r border-gray-200 pt-2 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
        data-hs-overlay-backdrop-container="#sidebar-backdrop"
      >
        <div className="px-6 flex flex-col justify-center">
          <img src={LogoImage} className="w-10 h-10 text-center mx-auto" />
          <a
            className="flex text-center text-base font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Unit Layanan Administrasi
          </a>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <div
                className={
                  "hs-accordion-toggle cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md dark:bg-gray-800 dark:text-slate-400 dark:hs-accordion-active:text-white" +
                  (isActive.dashboard
                    ? "dark:bg-gray-900 bg-gray-100 dark:text-slate-300"
                    : "dark:hover:bg-gray-900 hover:bg-gray-100 dark:hover:text-slate-300")
                }
                onClick={() => menuAction["dashboard"]()}
              >
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                Dashboard
              </div>
            </li>

            <li className="hs-accordion" id="users-accordion">
              <div
                className={
                  "hs-accordion-toggle cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md dark:bg-gray-800 dark:text-slate-400 dark:hs-accordion-active:text-white" +
                  (isActive.inputsurat
                    ? "dark:bg-gray-900 bg-gray-100 dark:text-slate-300"
                    : "dark:hover:bg-gray-900 hover:bg-gray-100 dark:hover:text-slate-300")
                }
                onClick={() => menuAction["input"]()}
              >
                <img src={InputSurat} className="w-[16px] h-[16px]" />
                Input Surat
              </div>
            </li>

            <li className="hs-accordion" id="account-accordion">
              <div
                className={
                  "cursor-pointer hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md dark:bg-gray-800 dark:text-slate-400 dark:hs-accordion-active:text-white" +
                  (isActive.masuk
                    ? "dark:bg-gray-900 bg-gray-100 dark:text-slate-300"
                    : "dark:hover:bg-gray-900 hover:bg-gray-100 dark:hover:text-slate-300")
                }
                onClick={() => menuAction["masuk"]()}
              >
                <img src={SuratMasuk} className="w-[16px] h-[16px]" />
                Surat Masuk
              </div>
            </li>

            <li className="hs-accordion" id="projects-accordion">
              <div
                className={
                  "cursor-pointer hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md dark:bg-gray-800 dark:text-slate-400 dark:hs-accordion-active:text-white" +
                  (isActive.keluar
                    ? "dark:bg-gray-900 bg-gray-100 dark:text-slate-300"
                    : "dark:hover:bg-gray-900 hover:bg-gray-100 dark:hover:text-slate-300")
                }
                onClick={() => menuAction["keluar"]()}
              >
                <img src={SuratKeluar} className="w-[16px] h-[16px]" />
                Surat Keluar
              </div>
            </li>

            <li>
              <div
                className={
                  "cursor-pointer hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md dark:bg-gray-800 dark:text-slate-400 dark:hs-accordion-active:text-white" +
                  (isActive.laporan
                    ? "dark:bg-gray-900 bg-gray-100 dark:text-slate-300"
                    : "dark:hover:bg-gray-900 hover:bg-gray-100 dark:hover:text-slate-300")
                }
                onClick={() => menuAction["laporan"]()}
              >
                <img src={Laporan} className="w-[16px] h-[16px]" />
                Laporan
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  );
};

export default Sidebar;
