import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditKategori() {
  const navigate = useNavigate();
  const [namaKategori, setNamaKategori] = useState("");
  const [gambar, setGambar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    getCategoriesByUUID();
  }, []);

  const getCategoriesByUUID = async () => {
    setLoading(true);
    try {
      const categories = await axios.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk/${uuid}`,
      );

      setNamaKategori(categories.data.data.nama);
      setPreview(categories.data.data.url);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/jenis-produk/${uuid}`,
        {
          nama: namaKategori,
          gambar,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      navigate(-1);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const handlechangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="users-header">
        <h3>Edit Kategori</h3>
      </div>
      <form onSubmit={handleSubmit} className="from-wrapper">
        <div className="from-grid">
          <label htmlFor="nama">Nama Kategori</label>
          <input
            type="text"
            id="nama"
            placeholder="Contoh: Elektronik"
            value={namaKategori}
            onChange={(e) => setNamaKategori(e.target.value)}
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

export default EditKategori;
