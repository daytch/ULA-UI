import React from "react";
import Header from "./../../components/Header";
import Sidebar from "./../../components/Sidebar";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import Input from "./InputSurat";
import SuratKeluar from "./SuratKeluar";
import SuratMasuk from "./SuratMasuk";
import Laporan from "./Laporan";
import Loader from "../../components/Loader";

const Admin = () => {
  const isActive = useSelector((state) => state.Dashboard.activeSidebarMenu);
  const loading = useSelector((state) => state.Dashboard.loading);

  const renderMenu = () => {
    return isActive.dashboard ? (
      <Dashboard />
    ) : isActive.input ? (
      <Input />
    ) : isActive.keluar ? (
      <SuratKeluar />
    ) : isActive.masuk ? (
      <SuratMasuk />
    ) : isActive.laporan ? (
      <Laporan />
    ) : null;
  };

  return (
    <>
      <Loader isLoading={loading} />
      <Header />
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <Sidebar />
      {/* <!-- Content --> */}
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
        {renderMenu()}
      </div>
      {/* <!-- End Content --> */}
      {/* <!-- ========== END MAIN CONTENT ========== --> */}

      {/* <!-- ========== SECONDARY CONTENT ========== --> */}

      {/* <!-- ========== END SECONDARY CONTENT ========== --> */}
    </>
  );
};

export default Admin;
