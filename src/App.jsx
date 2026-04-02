import "./App.css";
import { Route, Routes } from "react-router-dom";
import Kategori from "./components/pages/Kategori/Kategori";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <MyNavbar />
        <div className="dashboard-pages">
          <Routes>
            <Route path="/" element={<h1>Hello World</h1>} />
            <Route path="/dashboard" element={<h1>Dashboard</h1>} />

            {/* Pesanan */}
            <Route path="/dashboard/pesanan" element={<h1>Pesanan</h1>} />

            {/* Produk */}
            <Route path="/dashboard/produk" element={<h1>Produk</h1>} />
            <Route path="/dashboard/produk/add" element={<h1>Tambah Produk</h1>} />
            <Route path="/dashboard/produk/edit" element={<h1>Edit Produk</h1>} />

            {/* Jenis Produk */}
            <Route path="/dashboard/kategori" element={<Kategori />} />

            {/* Pelanggan */}
            <Route path="/dashboard/pelanggan" element={<h1>Pelanggan</h1>} />

            {/* Kartu */}
            <Route path="/dashboard/kartu" element={<h1>Kartu</h1>} />

            {/* Users */}
            <Route path="/dashboard/users" element={<h1>Users</h1>} />

            {/* History */}
            <Route path="/dashboard/history" element={<h1>History</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
