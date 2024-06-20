import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/NavbarComponent";
import Footer from "./components/Footer/FooterComponent";
import SidebarBenefisari from "./components/ComponentSidebar/SidebarBenefisari";
import SidebarDonatur from "./components/ComponentSidebar/SidebarDonatur";
import LoginWithoutFooter from "./components/LoginWithoutFooter";

import Register from "./pages/registerPage/register";
import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";

import Event from "./pages/eventPage/event";
import EventDetail from "./pages/eventPage/eventdetail";

import Blog from "./pages/blogPage/blog";
import BlogDetail from "./pages/blogPage/blogdetail";

import Pendidikan from "./pages/kategori/pendidikan";
import Bencana from "./pages/kategori/bencana";
import Kesehatan from "./pages/kategori/kesehatan";
import Sosial from "./pages/kategori/sosial";
import Teknologi from "./pages/kategori/teknologi";

import Zakat from "./pages/campaign/zakat";
import Qurban from "./pages/campaign/qurban";

import Berlangsung from "./pages/status/berlangsung";
import Diperpanjang from "./pages/status/diperpanjang";
import Selesai from "./pages/status/selesai";

import Berakhir from "./pages/diurutkan/berakhir";
import Populer from "./pages/diurutkan/populer";
import Terbaru from "./pages/diurutkan/terbaru";
import Terlama from "./pages/diurutkan/terlama";
import Mendesak from "./pages/diurutkan/mendesak";

import DetailPendidikan from "./pages/detailDonasi/detailPendidikan";
import DetailBencana from "./pages/detailDonasi/detailBencana";
import DetailKesehatan from "./pages/detailDonasi/detailKesehatan";
import DetailSosial from "./pages/detailDonasi/detailSosial";
import DetailTeknologi from "./pages/detailDonasi/detailTeknologi";
import DetailZakat from "./pages/detailDonasi/detailZakat";
import DetailQurban from "./pages/detailDonasi/detailQurban";

import PayDonasiUang from "./pages/paymentDonasi/payDonasiUang";
import PayDonasiBarang from "./pages/paymentDonasi/payDonasiBarang";

// dashboard donatur
// import DashboardDonatur from "./pages/donaturDashboard/dashboardDonatur/dashboardDonatur";
// import PelacakanDonatur from "./pages/donaturDashboard/pelacakanDonatur/pelacakanDonatur";
// import RiwayatDonatur from "./pages/donaturDashboard/riwayatDonatur/riwayatDonatur";
// import TransparansiDonatur from "./pages/donaturDashboard/transparansiDonatur/transparansiDonatur";
// dashboard donatur

import DashboardBenefisari from "./pages/benefisariDashboard/dashboardBenefisari/dashboardBenefisari";
import ProgramKampanye from "./pages/benefisariDashboard/programKampanye/programKampanye";
import PelacakanBenefisari from "./pages/benefisariDashboard/pelacakanBenefisari/pelacakanBenefisari";
import TransparansiBenefisari from "./pages/benefisariDashboard/transparansiBenefisari/transparansiBenefisari";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  const sidebarRoutes = [
    "/dashboardBenefisari",
    "/programKampanye",
    "/transparansiBenefisari",
    "/pelacakanBenefisari",
    "/dashboardDonatur",
    "/pelacakanDonatur",
    "/riwayatDonatur",
    "/transparansiDonatur",
  ];

  const isSidebar = sidebarRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
      {!isLoginPage && !isRegisterPage && !isSidebar && <Navbar />}
      {isSidebar && (
        <>
          {location.pathname.startsWith("/dashboardBenefisari") ||
          location.pathname.startsWith("/programKampanye") ||
          location.pathname.startsWith("/transparansiBenefisari") ||
          location.pathname.startsWith("/pelacakanBenefisari") ? (
            <SidebarBenefisari />
          ) : (
            <SidebarDonatur />
          )}
        </>
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/event" element={<Event />} />
        <Route path="/eventdetail" element={<EventDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/login" element={<LoginWithoutFooter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/bencana" element={<Bencana />} />
        <Route path="/kesehatan" element={<Kesehatan />} />
        <Route path="/sosial" element={<Sosial />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/qurban" element={<Qurban />} />
        <Route path="/berlangsung" element={<Berlangsung />} />
        <Route path="/diperpanjang" element={<Diperpanjang />} />
        <Route path="/selesai" element={<Selesai />} />
        <Route path="/berakhir" element={<Berakhir />} />
        <Route path="/populer" element={<Populer />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/terlama" element={<Terlama />} />
        <Route path="/mendesak" element={<Mendesak />} />
        <Route path="/detailpendidikan" element={<DetailPendidikan />} />
        <Route path="/detailbencana" element={<DetailBencana />} />
        <Route path="/detailkesehatan" element={<DetailKesehatan />} />
        <Route path="/detailsosial" element={<DetailSosial />} />
        <Route path="/detailteknologi" element={<DetailTeknologi />} />
        <Route path="/detailzakat" element={<DetailZakat />} />
        <Route path="/detailqurban" element={<DetailQurban />} />
        <Route path="/paydonasiuang" element={<PayDonasiUang />} />
        <Route path="/paydonasibarang" element={<PayDonasiBarang />} />
        {/* dashboard donatur */}
        {/* <Route path="/dashboardDonatur" element={<DashboardDonatur />} />
        <Route path="/pelacakanDonatur" element={<PelacakanDonatur />} />
        <Route path="/riwayatDonatur" element={<RiwayatDonatur />} />
        <Route path="/transparansiDonatur" element={<TransparansiDonatur />} /> */}
        {/* dashboard Benefisari */}
        <Route path="/dashboardBenefisari" element={<DashboardBenefisari />} />
        <Route path="/programKampanye" element={<ProgramKampanye />} />
        <Route path="/pelacakanBenefisari" element={<PelacakanBenefisari />} />
        <Route path="/transparansiBenefisari" element={<TransparansiBenefisari />} />
      </Routes>
      {!isLoginPage && !isRegisterPage && !isSidebar && <Footer />}
    </>
  );
}

export default App;