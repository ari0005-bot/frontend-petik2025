import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUsers() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
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

    if (!email || !username || !password || !role || !status) {
      alert("Semua field kecuali gambar harus diisi!");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("status", status);

      if (gambar) {
        formData.append("gambar", gambar);
      }

      await axios.post(`${import.meta.env.VITE_API_URL}/users`, formData);
      alert("User berhasil ditambahkan!");
      navigate(-1);
    } catch (error) {
      console.log("Error:", error.response?.data);
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert(
          "Gagal menambahkan user: " +
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
        <h3>Tambah User</h3>
      </div>
      <form onSubmit={handleSubmit} className="from-wrapper">
        <div className="from-grid">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Contoh: bambang@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Contoh: bambang123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="pelanggan">Pelanggan</option>
          </select>
          {errors.global && (
            <span className="error" style={{ color: "red" }}>
              {errors.global}
            </span>
          )}
        </div>
        <div className="from-grid">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Pilih Status</option>
            <option value="aktif">Aktif</option>
            <option value="tidak aktif">Tidak Aktif</option>
          </select>
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

export default AddUsers;
