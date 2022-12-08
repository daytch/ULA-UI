import React, { useRef, useEffect } from "react";
import { getImageUrl, useQuery, datetimeToString } from "./../functions";
import LogoImage from "./../assets/logo.png";
import { getTracking } from "../redux/slices/suratSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Wording from "../assets/wording.json";
import Loader from "../components/Loader";

const Tracking = () => {
  const dispatch = useDispatch();
  const listStatus = Wording.status;
  const no = useQuery().get("no");
  const searchRef = useRef();

  useEffect(() => {
    if (no) {
      dispatch(getTracking(no));
    }
  }, []);

  const handleSearch = () => {
    dispatch(getTracking(searchRef.current.value));
  };
  const trackings = useSelector((state) => state.Surat.tracking);
  const loading = useSelector((state) => state.Surat.loading);

  const mappingWording = {
    A: "Submit surat pada admin Umum",
    B1: "Surat sedang direview pihak terkait (Walikota)",
    B2: "Surat sedang direview pihak terkait (Wakil Walikota)",
    B3: "Surat sedang direview pihak terkait (Sekretariat Kota)",
    F: "Surat telah di reponse oleh pihak terkait, balasan surat bisa anda download pada link di wa anda.",
  };

  return (
    <div
      className="bg-cover bg-center w-screen h-screen grid place-items-center p-14"
      style={{ backgroundImage: "url(/bg-full.webp)" }}
    >
      <Loader isLoading={loading} />
      <div className="w-full h-full bg-white rounded-xl bg-opacity-30 backdrop-filter backdrop-blur-sm mx-auto">
        <div className="flex flex-col justify-items-center">
          <div className="w-3/5 mx-auto justify-self-center header-card flex flex-col justify-center items-center font-medium text-xl mb-8 border-b-2 border-white">
            <div className="mt-8 mb-3 w-3/5">
              <div className="w-full relative flex rounded-md shadow-sm">
                <input
                  ref={searchRef}
                  onChange={handleSearch}
                  type="text"
                  id="hs-search-box-with-loading-5"
                  name="hs-search-box-with-loading-5"
                  className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                  placeholder="No Surat"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg
                    className="h-4 w-4 text-gray-400"
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
        <div className="flex flex-col justify-items-center">
          <div className="w-3/5 mx-auto justify-self-center header-card flex flex-col justify-center items-center font-medium text-xl mb-8">
            <div className="mt-8 mb-3 w-4/5">
              <div className="w-full relative flex flex-col rounded-md shadow-sm">
                {trackings.map((item, idx) => {
                  return (
                    <div class="flex flex-col shadow-sm my-3 bg-[#d9d9d9] rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
                      <p>{datetimeToString(item.updatedAt)}</p>
                      <p className="font-light">
                        {mappingWording[item.status]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
