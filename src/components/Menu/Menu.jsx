import "./Menu.css";
import { useNavigate } from 'react-router-dom';


const Menu = ({data = [], search, onSearch}) => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <div className="search-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Coffee yang kamu sukaa broo..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.gambar} alt={item.nama} />

          <div className="card-body">
            <h3>{item.nama}</h3>
            <p>{item.deskripsi}</p>
            <button className="btn-pesan" onClick={() => navigate('/menu')}>
              Pesan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
