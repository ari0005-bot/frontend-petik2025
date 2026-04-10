import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  FaMoneyBillTrendUp,
  FaCartShopping,
  FaUsers,
  FaBox,
} from "react-icons/fa6";
import { TfiStatsUp } from "react-icons/tfi";
import { IoIosWarning } from "react-icons/io";
import axios from "axios";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Dashboard() {
  const [pesanan, setPesanan] = useState([]);
  const [produk, setProduk] = useState([]);
  const [pelanggan, setPelanggan] = useState([]);
  const [editStokId, setEditStokId] = useState(null);
  const [stokTambah, setStokTambah] = useState("");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const [resPesanan, resProduk, resPelanggan] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/pesanan`),
        axios.get(`${import.meta.env.VITE_API_URL}/produk`),
        axios.get(`${import.meta.env.VITE_API_URL}/pelanggan`),
      ]);

      setPesanan(resPesanan.data.data);
      setProduk(resProduk.data.data);
      setPelanggan(resPelanggan.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const month = new Date().toISOString().slice(0, 7);

  const totalPendapatanHariIni = pesanan
    .filter((p) => {
      return p.tanggal === today;
    })
    .reduce((sum, p) => sum + p.total, 0);

  const totalPendapatanBulanIni = pesanan
    .filter((p) => {
      return p.tanggal.startsWith(month);
    })
    .reduce((sum, p) => sum + p.total, 0);

  const pesananHariIni = pesanan.filter((p) => {
    return p.tanggal === today;
  }).length;

  const stokMenipis = produk.filter((p) => p.stok <= p.min_stok);

  const pesananTerbaru = [...pesanan]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const handleSimpanStok = async (produk) => {
    try {
      const tambahan = parseInt(stokTambah, 10);

      if (isNaN(tambahan)) {
        alert("Input tidak valid!");
      }
      const newStok = produk.stok + tambahan;

      console.log(typeof newStok);

      await axios.put(`${import.meta.env.VITE_API_URL}/produk/${produk.uuid}`, {
        stok: Number(newStok),
      });
      setEditStokId(null);
      setStokTambah(0);
      fetchAll();
      console.log(newStok);
    } catch (error) {
      console.log(error.response);
    }
  };

  const grafikData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(date.getDate() - (6 - i));

    const tgl = date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
    });
    const pesananHari = pesanan.filter(
      (p) => p.tanggal === date.toISOString().split("T")[0],
    );
    return {
      tgl: tgl,
      total: pesananHari.reduce((sum, p) => sum + p.total, 0),
      jumlah: pesananHari.length,
    };
  });

  console.log(grafikData);

  return (
    <div className="dashboard-page">
      <h3>Dashboard</h3>
      {/* DASHBOARD CARDS */}
      <div className="dashboard-cards">
        <div className="dashboard-card blue">
          <div className="dashboard-card-icon">
            <FaMoneyBillTrendUp />
          </div>
          <div className="dashboard-card-info">
            <p>Pendapatan Hari ini</p>
            <h4>Rp {totalPendapatanHariIni.toLocaleString("id-ID")}</h4>
          </div>
        </div>

        <div className="dashboard-card green">
          <div className="dashboard-card-icon">
            <TfiStatsUp />
          </div>
          <div className="dashboard-card-info">
            <p>Pendapatan Bulan ini</p>
            <h4>Rp {totalPendapatanBulanIni.toLocaleString("id-ID")}</h4>
          </div>
        </div>

        <div className="dashboard-card purple">
          <div className="dashboard-card-icon">
            <FaCartShopping />
          </div>
          <div className="dashboard-card-info">
            <p>Pesanan Hari ini</p>
            <h4>{pesananHariIni} Pesanan</h4>
          </div>
        </div>

        <div className="dashboard-card orange">
          <div className="dashboard-card-icon">
            <FaUsers />
          </div>
          <div className="dashboard-card-info">
            <p>Total Pelanggan</p>
            <h4>{pelanggan.length} Pelanggan</h4>
          </div>
        </div>

        <div className="dashboard-card red">
          <div className="dashboard-card-icon">
            <IoIosWarning />
          </div>
          <div className="dashboard-card-info">
            <p>Stok Menipis</p>
            <h4>{stokMenipis.length} Produk</h4>
          </div>
        </div>

        <div className="dashboard-card teal">
          <div className="dashboard-card-icon">
            <FaBox />
          </div>
          <div className="dashboard-card-info">
            <p>Total Pesanan</p>
            <h4>{pesanan.length} Pesanan</h4>
          </div>
        </div>
      </div>

      {/* GRAFIK */}
      <div className="dashboard-charts">
        <div className="dashboard-chart-card">
          <h4>Pendapatan 7 Hari Terakhir</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={grafikData}>
              <Line
                type="monotone"
                dataKey="total"
                stroke="#2d49ff"
                strokeWidth={2}
                dot={{ r: 4, fill: "#2d49ff" }}
              />
              <XAxis dataKey="tgl" />
              <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
              <CartesianGrid strokeDasharray="3 3" />
              <Legend />
              <Tooltip
                formatter={(v) => [
                  `Rp ${Number(v).toLocaleString("id-ID")}`,
                  "pendapatan",
                ]}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-chart-card">
          <h4>Jumlah Pesanan 7 Hari Terakhir</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={grafikData}>
              <Bar dataKey="jumlah" fill="#2d49ff" radius={[8, 8, 0, 0]} />
              <XAxis dataKey="tgl" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Legend />
              <Tooltip formatter={(v) => [`${v} Pesanan`, "jumlah pesanan"]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TABEL */}
      <div className="dashboard-bottom">
        <div>
          <h4>Pesanan Terbaru</h4>
          <table border={1}>
            <thead>
              <tr>
                <th>Pelanggan</th>
                <th>Tanggal</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {pesananTerbaru.map((pesanan) => (
                <tr key={pesanan.id}>
                  <td>{pesanan.pelanggan?.nama}</td>
                  <td>{pesanan.tanggal}</td>
                  <td>{pesanan.total} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h4>Stok Menipis</h4>
          <table border={1}>
            <thead>
              <tr>
                <th>Produk</th>
                <th>Stok</th>
                <th>Min Stok</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {stokMenipis.map((produk) => (
                <tr key={produk.id}>
                  <td>{produk.nama_barang}</td>
                  <td>{produk.stok}</td>
                  <td>{produk.min_stok} </td>
                  <td>
                    {editStokId === produk.uuid ? (
                      <>
                        <input
                          type="number"
                          value={stokTambah}
                          onChange={(e) => setStokTambah(e.target.value)}
                          placeholder="Tambah stok"
                        />
                        <button onClick={() => handleSimpanStok(produk)}>
                          Simpan
                        </button>
                        <button
                          onClick={() => {
                            setEditStokId(null);
                            setStokTambah("");
                          }}
                        >
                          Batal
                        </button>
                      </>
                    ) : (
                      <button onClick={() => setEditStokId(produk.uuid)}>
                        Tambah Stok
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
