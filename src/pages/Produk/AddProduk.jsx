import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduk = () => {
  const navigate = useNavigate();

  const [namaProduk, setNamaProduk] = useState("");
  const [stok, setStok] = useState(0);
  const [minStok, setMinStok] = useState(0);
  const [harga, setHarga] = useState(0);
  const [kategori, setKategori] = useState("");
  const [gambar, setGambar] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!namaProduk || !stok || !minStok || !harga || !kategori) {
      alert('Semua field kecuali gambar harus diisi!');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('nama_barang', namaProduk);
      formData.append('stok', stok);
      formData.append('min_stok', minStok);
      formData.append('harga', harga);
      formData.append('jenis_produk_id', kategori);
      
      if (gambar) {
        formData.append('gambar', gambar);
      }

      await axios.post(`${import.meta.env.VITE_API_URL}/produk`, formData);
      alert('Produk berhasil ditambahkan!');
      navigate(-1);
    } catch (error) {
      console.log('Error:', error.response?.data);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('Gagal menambahkan produk: ' + (error.response?.data?.message || 'Terjadi kesalahan'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setGambar(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="users-header">
        <h3>Tambah Produk</h3>
      </div>

      <form onSubmit={handleSubmit} className="from-wrapper">
        <div className="from-grid">
          <label>Nama Produk</label>
          <input
            type="text"
            placeholder="Contoh: Indomie Bangladesh"
            onChange={(e) => setNamaProduk(e.target.value)}
            required
          />
        </div>

        <div className="from-grid">
          <label>Stok</label>
          <input
            type="number"
            onChange={(e) => setStok(e.target.value)}
            required
          />
        </div>

        <div className="from-grid">
          <label>Minimal Stok</label>
          <input
            type="number"
            onChange={(e) => setMinStok(e.target.value)}
            required
          />
        </div>

        <div className="from-grid">
          <label>Harga</label>
          <input
            type="number"
            onChange={(e) => setHarga(e.target.value)}
            required
          />
        </div>

        <div className="from-grid">
          <label htmlFor="nama_kategori">Nama Kategori</label>
          <input
            type="text"
            placeholder="Contoh: 1"
            onChange={(e) => setKategori(e.target.value)}
            required
          />
          {errors.nama_kategori && (
            <span className="error" style={{ color: "red" }}>
              {errors.nama_kategori}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label>Gambar</label>
          <input type="file" accept="image/*" onChange={handleChangeImage} />
          {preview && <img src={preview} alt="preview" width={200} />}
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
};

export default AddProduk;
