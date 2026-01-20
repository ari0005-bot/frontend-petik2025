import { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <li>
          <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({isActive}) => isActive ? "active" : ""}>Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
