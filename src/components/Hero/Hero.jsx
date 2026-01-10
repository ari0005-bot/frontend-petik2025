import "./Hero.css";
import santri from "../img/santri.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Welcome to NongkiBroo Coffee Shop</h2>
          <p>
           Kedai kami adalah tempat di mana aroma kopi segar bertemu dengan suasana yang hangat dan nyaman. Setiap cangkir diracik dari biji kopi pilihan, diseduh dengan penuh ketelitian untuk menghasilkan rasa yang autentik. Cocok untuk bekerja, berbincang, atau sekadar menikmati waktu sendiri.
          </p>
          <button className="btn">Masuk</button>
        </div>

        <div className="hero-image">
          <img src={santri} alt="Santri" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
