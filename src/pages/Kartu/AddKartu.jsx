import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddKartu() {
  const navigate = useNavigate();
  const [kode, setKode] = useState("");
  const [nama, setNama] = useState("");
  const [diskon, setDiskon] = useState("");
  const [iuran, setIuran] = useState("");
  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handlechangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!kode || !nama || !diskon || !iuran) {
      alert("Semua field kecuali gambar harus diisi!");
      setLoading(false);
      return;
    }

    if (kode.length < 2 || kode.length > 4) {
      alert("Kode kartu harus 2-4 karakter!");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("kode", kode);
      formData.append("nama", nama);
      formData.append("diskon", diskon);
      formData.append("iuran", iuran);

      if (gambar) {
        formData.append("gambar", gambar);
      }

      await axios.post(`${import.meta.env.VITE_API_URL}/kartu`, formData);
      alert("Kartu berhasil ditambahkan!");
      navigate(-1);
    } catch (error) {
      console.log("Error:", error.response?.data);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert(
          "Gagal menambahkan kartu: " +
            (error.response?.data?.message || "Terjadi kesalahan"),
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="users-header">
        <h3>Tambah Kartu</h3>
      </div>
      <form onSubmit={handleSubmit} className="from-wrapper">
        <div className="from-grid">
          <label htmlFor="kode">Kode</label>
          <input
            type="text"
            id="kode"
            placeholder="Contoh: PLT"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            required
          />
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="nama">Nama Kartu</label>
          <input
            type="text"
            id="nama"
            placeholder="Contoh: Platinum"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="diskon">Diskon</label>
          <select
            id="diskon"
            value={diskon}
            onChange={(e) => setDiskon(e.target.value)}
            required
          >
            <option value="">Pilih Diskon</option>
            <option value="0">0%</option>
            <option value="0.025">2.5%</option>
            <option value="0.1">10%</option>
            <option value="0.25">25%</option>
          </select>
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="iuran">Iuran</label>
          <input
            type="number"
            id="iuran"
            placeholder="Contoh: 50000"
            value={iuran}
            onChange={(e) => setIuran(e.target.value)}
            required
          />
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="gambar">Gambar</label>
          <input
            type="file"
            id="gambar"
            accept="image/*"
            onChange={handlechangeImage}
          />
          {preview && <img src={preview} alt="image-preview" width={220} />}
        </div>

        <div className="btn-group">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn-delete"
          >
            Batal
          </button>
          <button type="submit" className="btn-tambah" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddKartu;
