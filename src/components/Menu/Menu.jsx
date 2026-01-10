import "./Menu.css";
import blackAroma from "../img/Black Aroma.png";
import moda from "../img/moda.png"
import taro from "../img/taro.jpeg"
import colBree from "../img/coldBree.jpeg"


const menuKopi = [
  {
    id: 1,
    nama: "Kopi Aroma",
    deskripsi: "Aroma kuat dan rasa seimbang",
    gambar: blackAroma,
  },
  {
    id: 2,
    nama: "Kopi Moda",
    deskripsi: "Rasa manis dan kafein tinggi",
    gambar: moda,
  },
  {
    id: 3,
    nama: "Taro",
    deskripsi: "Rasa khas yang tak akan terlupakan",
    gambar: taro
  },
  {
    id: 4,
    nama: "Collbree",
    deskripsi: "Dingin sampe badan badan",
    gambar: colBree
  }
];

const Menu = () => {
  return (
    <div className="menu-container">
      {menuKopi.map((item) => (
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
