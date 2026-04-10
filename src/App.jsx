import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Kategori from "./pages/Kategori/Kategori";
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";
import AddKategori from "./pages/Kategori/AddKategori";
import Produk from "./pages/Produk/Produk";
import Kartu from "./pages/Kartu/Kartu";
import Pesanan from "./pages/Pesanan/Pesanan";
import AddPesanan from "./pages/Pesanan/AddPesanan";
import EditPesanan from "./pages/Pesanan/EditPesanan";
import Pelanggan from "./pages/Pelanggan/Pelanggan";
import Users from "./pages/Users/Users";
import History from "./pages/History/History";
import EditKategori from "./pages/Kategori/EditKategori";
import AddProduk from "./pages/Produk/AddProduk";
import EditProduk from "./pages/Produk/EditProduk";
import AddPelanggan from "./pages/Pelanggan/AddPelanggan";
import EditPelanggan from "./pages/Pelanggan/EditPelanggan";
import AddUsers from "./pages/Users/AddUsers";
import AddKartu from "./pages/Kartu/AddKartu";
import EditKartu from "./pages/Kartu/EditKartu";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />

          {/* Pesanan */}
          <Route path="/dashboard/pesanan" element={<Pesanan />} />
          <Route path="/dashboard/pesanan/add" element={<AddPesanan />} />
          <Route
            path="/dashboard/pesanan/edit/:uuid"
            element={<EditPesanan />}
          />

          {/* Produk */}
          <Route path="/dashboard/produk" element={<Produk />} />
          <Route path="/dashboard/produk/add" element={<AddProduk />} />
          <Route path="/dashboard/produk/edit/:uuid" element={<EditProduk />} />

          {/* Jenis Produk */}
          <Route path="/dashboard/kategori" element={<Kategori />} />
          <Route path="/dashboard/kategori/add" element={<AddKategori />} />
          <Route
            path="/dashboard/kategori/edit/:uuid"
            element={<EditKategori />}
          />

          {/* Pelanggan */}
          <Route path="/dashboard/pelanggan" element={<Pelanggan />} />
          <Route path="/dashboard/pelanggan/add" element={<AddPelanggan />} />
          <Route
            path="/dashboard/pelanggan/edit/:uuid"
            element={<EditPelanggan />}
          />

          {/* Kartu */}
          <Route path="/dashboard/kartu" element={<Kartu />} />
          <Route path="/dashboard/kartu/add" element={<AddKartu />} />
          <Route path="/dashboard/kartu/edit/:uuid" element={<EditKartu />} />

          {/* Users */}
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/users/add" element={<AddUsers />} />

          {/* History */}
          <Route path="/dashboard/history" element={<History />} />
          <Route path="/dashboard/history/add" element={<h1>History</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
