import { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">NongkiBroo</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search Coffee yang kamu sukaa broo..."
        value={search}
        onChange={handleSearchChange}
      />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
