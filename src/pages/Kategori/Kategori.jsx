import { useEffect, useState } from "react";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Kategori = () => {
  const [categories, setCategories] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const { search } = useOutletContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProductCategories();
  }, []);

  const getProductCategories = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/jenis-produk`,
      );
      setCategories(result.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filterData = categories.filter((category) => {
    return category.nama?.toLowerCase().includes(search.toLowerCase());
  });

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
    const msg = window.confirm("Apakah yakin ingin menghapus kategori ini?");
    if (!msg) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/jenis-produk/${uuid}`,
      );
      getProductCategories();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (uuid) => {
    navigate(`/dashboard/kategori/edit/${uuid}`);
  };

  return (
    <div>
      <div className="kategori-header">
        <h3>Daftar Kategori</h3>
        <NavLink to={"/dashboard/kategori/add"}>Tambah Kategori</NavLink>
      </div>

      <div className="table-wrapper">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Gambar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <td key={i}>
                        {" "}
                        <Skeleton />
                      </td>
                    ))}
                  </tr>
                ))
              : paginatedData.map((category, index) => (
                  <tr key={index}>
                    <td>{(currentpage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                    <td>{category.nama}</td>
                    <td>
                      <img src={category.url} alt="gambar" width={120} />
                    </td>
                    <td>
                      <button onClick={() => handleEdit(category.uuid)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(category.uuid)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      {/* PAGINATION */}

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
              className="btn-page"
              disabled={currentpage === i + 1}
              key={i}
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
            &raquo; Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Kategori;
