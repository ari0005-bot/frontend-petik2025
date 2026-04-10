import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduk() {
  const navigate = useNavigate();
  const { uuid } = useParams();

  const [namaProduk, setNamaProduk] = useState("");
  const [stok, setStok] = useState(0);
  const [minStok, setMinStok] = useState(0);
  const [harga, setHarga] = useState(0);
  const [kategori, setKategori] = useState("");
  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (uuid) {
      getProdukByUUID();
    }
  }, [uuid]);

  const getProdukByUUID = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/produk/${uuid}`,
      );

      const data = response.data.data;
      console.log("DATA PRODUK:", data);

      setNamaProduk(data.nama_barang || "");
      setStok(data.stok || 0);
      setMinStok(data.min_stok || 0);
      setHarga(data.harga || 0);
      setKategori(data.jenis_produk_id?.toString() || "");
      setPreview(data.url || null);
    } catch (error) {
      console.log("ERROR GET:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!namaProduk || !stok || !minStok || !harga || !kategori) {
      alert("Semua field kecuali gambar harus diisi!");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("nama_barang", namaProduk);
      formData.append("stok", stok);
      formData.append("min_stok", minStok);
      formData.append("harga", harga);
      formData.append("jenis_produk_id", kategori);

      if (gambar) {
        formData.append("gambar", gambar);
      }

      await axios.put(
        `${import.meta.env.VITE_API_URL}/produk/${uuid}`,
        formData,
      );

      alert("Produk berhasil diupdate!");
      navigate(-1);
    } catch (error) {
      console.log("ERROR UPDATE:", error.response?.data);

      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert(
          "Gagal update produk: " +
            (error.response?.data?.message || "Terjadi kesalahan"),
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGambar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="users-header">
        <h3>Edit Produk</h3>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="from-wrapper">
          <div className="from-grid">
            <label>Nama Produk</label>
            <input
              type="text"
              value={namaProduk}
              onChange={(e) => setNamaProduk(e.target.value)}
              required
            />
            {errors.nama_barang && (
              <span style={{ color: "red" }}>{errors.nama_barang}</span>
            )}
          </div>

          <div className="from-grid">
            <label>Stok</label>
            <input
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              required
            />
            {errors.stok && <span style={{ color: "red" }}>{errors.stok}</span>}
          </div>

          <div className="from-grid">
            <label>Minimal Stok</label>
            <input
              type="number"
              value={minStok}
              onChange={(e) => setMinStok(e.target.value)}
              required
            />
            {errors.min_stok && (
              <span style={{ color: "red" }}>{errors.min_stok}</span>
            )}
          </div>

          <div className="from-grid">
            <label>Harga</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
            {errors.harga && (
              <span style={{ color: "red" }}>{errors.harga}</span>
            )}
          </div>

          <div className="from-grid">
            <label>ID Kategori</label>
            <input
              type="number"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
              required
            />
            {errors.jenis_produk_id && (
              <span style={{ color: "red" }}>{errors.jenis_produk_id}</span>
            )}
          </div>

          <div className="from-grid">
            <label>Gambar</label>
            <input type="file" accept="image/*" onChange={handleChangeImage} />

            {preview && (
              <img
                src={preview}
                alt="preview"
                width={220}
                style={{ marginTop: "10px", borderRadius: "10px" }}
              />
            )}
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
      )}
    </div>
  );
}

export default EditProduk;
