import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Cari produk..."
        />
      </div>
    </nav>
  );
};

export default MyNavbar;
