import React, { useState, useMemo, useEffect, useRef } from "react";
import SearchBox from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffectOnce, convertDate } from "../../functions/index.js";
import { getReport, postActionSurat } from "../../redux/slices/suratSlice.js";
import { toogleLoading } from "../../redux/slices/dashboardSlice.js";
import Pagination from "./../../components/Pagination";
import wording from "../../assets/wording.json";

let PageSize = 10;

const Laporan = () => {
  const dispatch = useDispatch();
  const [detail, setDetail] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [totalData, setTotalData] = useState(0);

  const kepadaRef = useRef();
  const keteranganRef = useRef();

  useEffectOnce(() => {
    dispatch(getReport());
  });

  const inbox = useSelector((state) => state.Surat.inbox);
  const master = useSelector((state) => state.Surat.inbox);

  useEffect(() => {
    setFilteredData(inbox);
  }, [inbox]);

  const currentTableData = useMemo(() => {
    let dt = inbox;
    if (keywords) {
      dt = dt.filter((x) => {
        if (
          x.nama.toLowerCase().indexOf(keywords) > -1 ||
          x.judul.toLowerCase().indexOf(keywords) > -1 ||
          x.tujuan.toLowerCase().indexOf(keywords) > -1
        ) {
          return x;
        }
      });
    }
    setTotalData(dt.length);
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return dt.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, inbox, keywords]);

  const filteringData = (e) => {
    let keyword = e.currentTarget.value.toLowerCase();
    setKeywords(keyword);
  };

  const handlePostAction = () => {
    dispatch(toogleLoading(true));

    let payload = {
      id: Number(detail.id), // id surat
      destination: kepadaRef.current.value, // Admin Walikota
      keterangan: keteranganRef.current.value,
    };
    dispatch(postActionSurat(payload));
    dispatch(toogleLoading(false));
    window.open(
      "https://wa.me/" +
        detail.no_hp +
        "/?text=" +
        wording.tracking +
        "" +
        detail.id,
      "_blank"
    );
  };

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-[#F3F4F6]">
      <p className="text-xl font-light my-4">Laporan</p>

      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <SearchBox filteringData={filteringData} />
            <table className="min-w-full bg-white divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase"
                  >
                    No Surat
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase"
                  >
                    Tujuan
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase"
                  >
                    Subject
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase"
                  >
                    Pengirim
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase"
                  >
                    Tanggal Kirim
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase"
                  >
                    Tanggal Selesai
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-base font-bold text-gray-500 uppercase"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {currentTableData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item.no_surat}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.judul}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.tujuan}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.nama}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {convertDate(item.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.tgl_selesai ? convertDate(item.tgl_selesai) : "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item.status === "On Progress" ? (
                          <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            On Progress
                          </span>
                        ) : (
                          <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Done
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* <Pager /> */}
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={totalData}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
