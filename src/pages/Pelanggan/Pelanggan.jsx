import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link, useOutletContext } from "react-router-dom";

const Pelanggan = () => {
  const [pelanggan, setPelanggan] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/pelanggan`,
      );
      setPelanggan(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = pelanggan.filter(
    (item) =>
      item.nama?.toLowerCase().includes(search.toLowerCase()) ||
      item.no_hp?.includes(search || "") ||
      item.alamat?.toLowerCase().includes(search?.toLowerCase() || ""),
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
    const msg = window.confirm("Apakah yakin ingin menghapus pelanggan ini?");
    if (!msg) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/pelanggan/${uuid}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar pelanggan</h3>
        <NavLink to={"/dashboard/pelanggan/add"}>Tambah pelanggan</NavLink>
      </div>

      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Gender</th>
              <th>No HP</th>
              <th>Alamat</th>
              <th>Tanggal Lahir</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={item.uuid}>
                  <td>{(currentpage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                  <td>{item.nama}</td>
                  <td>{item.gender}</td>
                  <td>{item.no_hp}</td>
                  <td>{item.alamat}</td>
                  <td>{item.tgl_lahir}</td>

                  <td>
                    <Link to={`/dashboard/pelanggan/edit/${item.uuid}`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(item.uuid)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>Data tidak ditemukan</td>
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

export default Pelanggan;
