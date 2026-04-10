import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddPelanggan() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [kartuId, setKartuId] = useState("");
  const [kartuList, setKartuList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getKartu();
  }, []);

  const getKartu = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/kartu`);
      setKartuList(result.data.data);
    } catch (error) {
      console.log('Error loading kartu:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    
    if (!nama || !gender || !noHp || !alamat || !tglLahir) {
      alert('Semua field kecuali kartu harus diisi!');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('gender', gender);
    formData.append('no_hp', noHp);
    formData.append('alamat', alamat);
    formData.append('tgl_lahir', tglLahir);
    formData.append('user_id', 1);
    
    if (kartuId) {
      formData.append('kartu_id', kartuId);
    }

    console.log('Submitting pelanggan:', Object.fromEntries(formData));
    console.log('API URL:', `${import.meta.env.VITE_API_URL}/pelanggan`);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/pelanggan`, formData);
      console.log('Response:', response);
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);
      
      if (response.data && response.data.message) {
        alert('Success: ' + response.data.message);
      } else {
        alert('Pelanggan berhasil ditambahkan!');
      }
      
      navigate(-1);
    } catch (error) {
      console.log('Full error object:', error);
      console.log('Error response:', error.response);
      console.log('Error status:', error.response?.status);
      console.log('Error data:', error.response?.data);
      
      if (error.response?.status === 400) {
        const errorData = error.response.data;
        console.log('Error data details:', errorData);
        
        if (errorData.errors && Array.isArray(errorData.errors)) {
          errorData.errors.forEach((err, index) => {
            console.log(`Error ${index}:`, err);
            alert(`Validation Error: ${err.field || 'Field'} - ${err.message || err.msg || 'Invalid value'}`);
          });
        } else if (errorData.message) {
          alert('Error: ' + errorData.message);
        } else {
          alert('Validation failed. Please check all fields.');
        }
      } else if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
        const errorMessages = Object.values(error.response.data.errors).flat();
        console.log('Validation errors:', errorMessages);
        errorMessages.forEach((message) => {
          const errorElement = document.querySelector(`.${message.field} .error`);
          if (errorElement) {
            errorElement.style.display = 'block';
            errorElement.style.visibility = 'visible';
            errorElement.innerText = message.message;
          }
        });
      } else if (error.response && error.response.data.message) {
        console.log('Server message:', error.response.data.message);
        alert('Error: ' + error.response.data.message);
      } else if (error.response?.status === 500) {
        console.log('Server error 500');
        alert('Server error. Silakan coba lagi nanti.');
      } else if (error.response?.status === 404) {
        console.log('Endpoint not found 404');
        alert('Endpoint tidak ditemukan. Periksa API URL.');
      } else if (error.response?.status === 422) {
        console.log('Validation error 422');
        const errorMessages = Object.values(error.response.data).flat();
        alert('Validation Error: ' + errorMessages.join(', '));
      } else {
        console.log('Unknown error:', error.message || error);
        alert('Terjadi kesalahan: ' + (error.message || 'Unknown error'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="users-header">
        <h3>Tambah Pelanggan</h3>
      </div>
      <form onSubmit={handleSubmit} className="from-wrapper">
        <div className="from-grid">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            id="nama"
            placeholder="Masukkan nama pelanggan"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          {errors.nama && (
            <div className="error" style={{ 
              color: "#721c24", 
              backgroundColor: "#f8d7da", 
              padding: "8px 12px", 
              borderRadius: "4px", 
              fontSize: "12px", 
              display: "block", 
              marginTop: "5px",
              border: "1px solid #f5c6cb",
              fontWeight: "500"
            }}>
              {errors.nama}
            </div>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Pilih Gender</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
          {errors.gender && (
            <div className="error" style={{ 
              color: "#721c24", 
              backgroundColor: "#f8d7da", 
              padding: "8px 12px", 
              borderRadius: "4px", 
              fontSize: "12px", 
              display: "block", 
              marginTop: "5px",
              border: "1px solid #f5c6cb",
              fontWeight: "500"
            }}>
              {errors.gender}
            </div>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="noHp">No HP</label>
          <input
            type="text"
            id="noHp"
            placeholder="Masukkan nomor HP"
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
            required
          />
          {errors.no_hp && (
            <span className="error" style={{ color: "red", fontSize: "12px", display: "block", marginTop: "5px" }}>
              {errors.no_hp}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="alamat">Alamat</label>
          <textarea
            id="alamat"
            placeholder="Masukkan alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            required
          />
          {errors.alamat && (
            <span className="error" style={{ color: "red", fontSize: "12px", display: "block", marginTop: "5px" }}>
              {errors.alamat}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="tglLahir">Tanggal Lahir</label>
          <input
            type="date"
            id="tglLahir"
            value={tglLahir}
            onChange={(e) => setTglLahir(e.target.value)}
            required
          />
          {errors.tgl_lahir && (
            <span className="error" style={{ color: "red", fontSize: "12px", display: "block", marginTop: "5px" }}>
              {errors.tgl_lahir}
            </span>
          )}
        </div>

        <div className="from-grid">
          <label htmlFor="kartu">Kartu</label>
          <select
            id="kartu"
            value={kartuId}
            onChange={(e) => setKartuId(e.target.value)}
          >
            <option value="">Pilih Kartu</option>
            {kartuList.map((kartu) => (
              <option key={kartu.id} value={kartu.id}>
                {kartu.nama} - Diskon {kartu.diskon}% - Iuran Rp {kartu.iuran.toLocaleString('id-ID')}
              </option>
            ))}
          </select>
          {errors.kartu_id && (
            <span className="error" style={{ color: "red", fontSize: "12px", display: "block", marginTop: "5px" }}>
              {errors.kartu_id}
            </span>
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
    </div>
  );
}

export default AddPelanggan;
