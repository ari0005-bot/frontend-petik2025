import React, { useState } from 'react';
import './AddMenuForm.css';

const AddMenuForm = ({ onAddMenu }) => {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    gambar: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nama && formData.deskripsi && formData.gambar) {
      onAddMenu(formData);
      setFormData({ nama: "", deskripsi: "", gambar: "" });
    }
  };

  return (
    <div className="form-container">
      <h2>Tambah Menu Baru</h2>
      <form onSubmit={handleSubmit} className="menu-form">
        <div className="form-group">
          <label htmlFor="nama">Nama Menu:</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            placeholder="Masukkan nama menu"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="deskripsi">Deskripsi:</label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleInputChange}
            placeholder="Masukkan deskripsi menu"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gambar">URL Gambar:</label>
          <input
            type="text"
            id="gambar"
            name="gambar"
            value={formData.gambar}
            onChange={handleInputChange}
            placeholder="Masukkan URL gambar"
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-submit">Tambah Menu</button>
        </div>
      </form>
    </div>
  );
};

export default AddMenuForm;
