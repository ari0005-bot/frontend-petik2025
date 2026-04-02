import { NavLink } from "react-router-dom";
import { use, useState, useEffect } from "react";
import axios from "axios";
import "./Kategori.css";


const Kategori = () => {
  const [categories, setCategories] = useState([]);

  // untuk menerima collback
  useEffect(() => {
    getProductCategories();
  }, []);

  const getProductCategories = async () => {
    try {
      const result = await axios.get(
        `https://apiniaga.psjpetik.my.id/api/v1/jenis-produk`,
      );
      console.log(categories);
      setCategories(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="kategori-container">
      <div className="kategori-header">
        <h3>Daftar Kategori</h3>
        <NavLink to="/dashboard/kategori/add">Tambah Kategori</NavLink>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Gambar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.nama}</td>
                <td>
                  <img
                    src={category.url}
                    alt={category.nama}
                    style={{
                      width: "80px",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  />
                </td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kategori;
