import Navbar from '../Navbar/Navbar.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Error.css"

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='error'>
      <h1>404 Halaman tidak ditemukan!</h1>
      <p>Oops... Halaman yang kamu cari tidak ada.</p>

    <div className='action'>
      <NavLink to="/">Home</NavLink>
      <br />
      <button onClick={() => navigate(-1)}>Kembali</button>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
