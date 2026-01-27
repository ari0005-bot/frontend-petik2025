import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">NongkiBroo</h1>
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
