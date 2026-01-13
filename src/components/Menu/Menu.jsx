import "./Menu.css";


const Menu = ({data = []}) => {
  return (
    <div className="menu-container">
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.gambar} alt={item.nama} />

          <div className="card-body">
            <h3>{item.nama}</h3>
            <p>{item.deskripsi}</p>
            <button className="btn-pesan">Pesan</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
