import React from 'react'
import MyNavbar from '../Navbar/MyNavbar';
import { NavLink, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyNavbar />
      <h3>404 Halaman tidak ditemukan!</h3>
      <p>Oops... Halaman yang kamu cari tidak ada.</p>

      <NavLink to="/">Home</NavLink>
      <br />
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
};

export default ErrorPage;
