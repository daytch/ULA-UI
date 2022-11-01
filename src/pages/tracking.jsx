import React from "react";
import { getImageUrl } from "./../functions";
import LogoImage from "./../assets/logo.png";

const Tracking = () => {
  const handleLogin = () => {};

  return (
    <div
      className="bg-cover bg-center w-screen h-screen grid place-items-center p-14"
      style={{ backgroundImage: "url(/bg-full.jpeg)" }}
    >
      <div className="w-full h-full bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm mx-auto">
        <div className="flex flex-col justify-items-center">
          <div className="w-3/5 mx-auto justify-self-center header-card flex flex-col justify-center items-center font-medium text-xl mb-8 border-b-2 border-white">
            <div className="mt-8 mb-3">
              
              <div class="relative flex rounded-md shadow-sm">
                <input
                  type="text"
                  id="hs-search-box-with-loading-5"
                  name="hs-search-box-with-loading-5"
                  class="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  placeholder="No Surat"
                />
                <div class="absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg
                    class="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="grid gap-y-4 p-5 px-14">
            <div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  placeholder="Email"
                  aria-describedby="email-error"
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
                  placeholder="Password"
                  aria-describedby="password-error"
                />
                {/* <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div> */}
              </div>
              <p
                className="hidden text-xs text-red-600 mt-2"
                id="password-error"
              >
                8+ characters required
              </p>
            </div>
            {/* <!-- End Form Group --> */}

            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Tracking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tracking;
