import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPesanan() {
  const navigate = useNavigate();
  const [tanggal, setTanggal] = useState("");
  const [pelangganId, setPelangganId] = useState("");
  const [selectedProduk, setSelectedProduk] = useState([]);
  const [pelangganList, setPelangganList] = useState([]);
  const [produkList, setProdukList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { uuid } = useParams();
  const [produkId, setProdukId] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (uuid) {
      getPelanggan();
      getProduk();
      getPesananByUUID();
    }
  }, [uuid]);

  const getPelanggan = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/pelanggan`,
      );
      setPelangganList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduk = async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/produk`);
      setProdukList(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProdukToOrder = () => {
    if (!produkId || quantity <= 0) {
      alert("Pilih produk dan masukkan quantity yang valid!");
      return;
    }

    const selectedProduct = produkList.find((p) => p.id === parseInt(produkId));
    if (!selectedProduct) {
      alert("Produk tidak ditemukan!");
      return;
    }

    const subtotal = selectedProduct.harga * quantity;
    const newProduk = {
      produk_id: parseInt(produkId),
      nama_barang: selectedProduct.nama_barang,
      harga: selectedProduct.harga,
      quantity: parseInt(quantity),
      subtotal: subtotal,
    };

    setSelectedProduk([...selectedProduk, newProduk]);
    setProdukId("");
    setQuantity(1);
  };

  const removeProdukFromOrder = (index) => {
    const newSelectedProduk = selectedProduk.filter((_, i) => i !== index);
    setSelectedProduk(newSelectedProduk);
  };

  const getPesananByUUID = async () => {
    setLoading(true);
    try {
      console.log("Loading pesanan with UUID:", uuid);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pesanan/${uuid}`,
      );
      const pesanan = response.data.data;
      console.log("Pesanan data loaded:", pesanan);

      setTanggal(pesanan.tanggal);
      setPelangganId(
        pesanan.pelanggan_id ? pesanan.pelanggan_id.toString() : "",
      );
      setSelectedProduk(pesanan.detail_pesanan || []);
    } catch (error) {
      console.log("Error loading pesanan:", error.response);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const totalOrder = selectedProduk.reduce(
      (sum, item) => sum + item.subtotal,
      0,
    );
    const pesananData = {
      tanggal: tanggal,
      pelanggan_id: parseInt(pelangganId),
      total: totalOrder,
      detail_pesanan: selectedProduk.map((item) => ({
        produk_id: item.produk_id,
        quantity: parseInt(item.quantity),
        subtotal: parseInt(item.subtotal),
      })),
    };

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/pesanan/${uuid}`,
        pesananData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      alert("Pesanan berhasil diupdate!");
      navigate(-1);
    } catch (error) {
      console.log("Error editing pesanan:", error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="users-header">
        <h3>Edit Pesanan</h3>
      </div>
      {loading ? (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h4>Loading data pesanan...</h4>
          <p>Mohon tunggu sebentar</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="from-wrapper">
          <div className="from-grid">
            <label htmlFor="tanggal">Tanggal</label>
            <input
              type="date"
              id="tanggal"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              required
            />
            {errors.tanggal && (
              <span className="error" style={{ color: "red" }}>
                {errors.tanggal}
              </span>
            )}
          </div>

          <div className="from-grid">
            <label htmlFor="pelanggan">Pelanggan</label>
            <select
              id="pelanggan"
              value={pelangganId}
              onChange={(e) => setPelangganId(e.target.value)}
              required
            >
              <option value="">Pilih Pelanggan</option>
              {pelangganList.map((pelanggan) => (
                <option key={pelanggan.uuid} value={pelanggan.id}>
                  {pelanggan.nama} - {pelanggan.no_hp}
                </option>
              ))}
            </select>
            {errors.pelanggan_id && (
              <span className="error" style={{ color: "red" }}>
                {errors.pelanggan_id}
              </span>
            )}
          </div>

          <div className="from-grid">
            <label>Tambah Produk</label>
            <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
              <div style={{ flex: 1 }}>
                <select
                  value={produkId}
                  onChange={(e) => setProdukId(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">Pilih Produk</option>
                  {produkList.map((produk) => (
                    <option key={produk.id} value={produk.id}>
                      {produk.nama_barang} - Rp{" "}
                      {produk.harga.toLocaleString("id-ID")}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ width: "100px" }}>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Qty"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={addProdukToOrder}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>

          <div className="from-grid">
            <label>Detail Pesanan</label>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {selectedProduk.length > 0 ? (
                selectedProduk.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      marginBottom: "5px",
                      padding: "5px",
                      border: "1px solid #eee",
                      borderRadius: "3px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <strong>
                        {item.nama_barang || `Produk ID: ${item.produk_id}`}
                      </strong>
                      <br />
                      Qty: {item.quantity} x Rp{" "}
                      {item.harga?.toLocaleString("id-ID") ||
                        item.subtotal / item.quantity}{" "}
                      = Rp {item.subtotal.toLocaleString("id-ID")}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeProdukFromOrder(index)}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "3px",
                        cursor: "pointer",
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                ))
              ) : (
                <p style={{ color: "#666", fontStyle: "italic" }}>
                  Tidak ada detail pesanan
                </p>
              )}
              {selectedProduk.length > 0 && (
                <div
                  style={{
                    marginTop: "10px",
                    paddingTop: "10px",
                    borderTop: "1px solid #ccc",
                    fontWeight: "bold",
                  }}
                >
                  Total: Rp{" "}
                  {selectedProduk
                    .reduce((sum, item) => sum + item.subtotal, 0)
                    .toLocaleString("id-ID")}
                </div>
              )}
            </div>
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
      )}
    </div>
  );
}

export default EditPesanan;
