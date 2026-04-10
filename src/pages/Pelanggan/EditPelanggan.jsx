import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPelanggan() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [gender, setGender] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();

  useEffect(() => {
    if (uuid) {
      getPelangganByUUID();
    }
  }, [uuid]);

  const getPelangganByUUID = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`,
      );
      const pelanggan = response.data.data;
      
      setNama(pelanggan.nama);
      setGender(pelanggan.gender);
      setNoHp(pelanggan.no_hp);
      setAlamat(pelanggan.alamat);
      setTglLahir(pelanggan.tgl_lahir);
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
        `${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`,
        {
          nama,
          gender,
          no_hp: noHp,
          alamat,
          tgl_lahir: tglLahir,
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
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="users-header">
        <h3>Edit Pelanggan</h3>
      </div>
      <form onSubmit={handleSubmit} className="from-wrapper">
        <div className="from-grid">
          <label htmlFor="nama">Nama Pelanggan</label>
          <input
            type="text"
            id="nama"
            placeholder="Contoh: Bambang Pamungkas"
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
            <span className="error" style={{ color: "red" }}>
              {errors.gender}
            </span>
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
            <span className="error" style={{ color: "red" }}>
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
            <span className="error" style={{ color: "red" }}>
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
            <span className="error" style={{ color: "red" }}>
              {errors.tgl_lahir}
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

export default EditPelanggan;
