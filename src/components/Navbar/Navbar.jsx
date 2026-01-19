import {  NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
      <div>
        <ul>
          <li>
            <NavLink to={"/"} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/posts"} className={({isActive}) => isActive ? "active" : ""}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
          </li>
        </ul>
      </div>
    )
  }
  
  export default Navbar;
  