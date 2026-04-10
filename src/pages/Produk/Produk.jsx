import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";

const Produk = () => {
  const navigate = useNavigate();
  const [produk, setProduk] = useState([]);
  const [kategori, setKategori] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getProduct();
    getKategori();
  }, []);

  const getProduct = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/produk`);
      setProduk(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getKategoriNama = (id) => {
    const kat = kategori.find(k => k.id === id);
    return kat ? kat.nama : '-';
  };

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getKategori = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/jenis-produk`);
      setKategori(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = produk.filter((item) =>
    item.nama_barang?.toLowerCase().includes(search.toLowerCase()),
  );

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);

  const paginatedData = filterData.slice(
    (currentpage - 1) * ITEMS_PER_PAGE,
    currentpage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const handleDelete = async (uuid) => {
    const msg = window.confirm("Apakah yakin ingin menghapus produk ini?");
    if (!msg) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/produk/${uuid}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar Produk</h3>
        <NavLink to={"/dashboard/produk/add"}>Tambah Produk</NavLink>
      </div>

      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Stok</th>
              <th>Minimal Stok</th>
              <th>Harga</th>
              <th>Kategori</th>
              <th>Gambar</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={item.uuid}>
                  <td>{(currentpage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                  <td>{item.nama_barang}</td>
                  <td>{item.stok}</td>
                  <td>{item.min_stok}</td>
                  <td>{formatRupiah(item.harga)}</td>
                  <td>{getKategoriNama(item.jenis_produk_id)}</td>
                  <td>
                    <img src={item.url} alt="gambar" width={100} />
                  </td>
                  <td>
                    <button onClick={() => navigate(`/dashboard/produk/edit/${item.uuid}`)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item.uuid)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8}>Data tidak ditemukan</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="btn-page"
            disabled={currentpage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            &laquo; Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className="btn-page"
              disabled={currentpage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn-page"
            disabled={currentpage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default Produk;
