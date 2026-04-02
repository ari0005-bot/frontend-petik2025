
import "./Sidebar.css";
import LogoPetik from "../../assets/petik.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={LogoPetik} alt="logo" />
        <h2>PeTIK Niaga</h2>
      </div>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/dashboard/pesanan">Pesanan</a></li>
        <li><a href="/dashboard/produk">Produk</a></li>
        <li><a href="/dashboard/kategori" className="active">Kategori</a></li>
        <li><a href="/dashboard/pelanggan">Pelanggan</a></li>
        <li><a href="/dashboard/kartu">Kartu</a></li>
        <li><a href="/dashboard/users">Users</a></li>
        <li><a href="/dashboard/history">History</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
