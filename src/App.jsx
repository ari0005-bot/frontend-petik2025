import './App.css'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card';

function App() {

  return (
    <>
     <Navbar />
     <Content nama={"Ucup"} membership={"Platinum"} />
     <Content nama={"Bambang"} membership={"Gold"} />
     <Content nama={"Budi"} membership={"Silver"} />
     <h3>Yuk berlangganan membership!</h3>

     <div className="card-wrapper">

     <Card 
     title={"Free"}
     price={0}
     benefit1={"Gratis tanpa biaya langganan"}
     benefit2={"Bisa melihat katalog & update terbaru"}
     benefit3={"Akses dasar ke fitur utama"}
     benefit4={"Dukungan komunitas"} />

     <Card 
     isPopular="true"
     title={"Gold"}
     price={100000}
     benefit1={"Prioritas layanan pelanggan"}
     benefit2={"Akses premium terpilih"}
     benefit3={"Promo & diskon khusus member"}
     benefit4={"Dukungan komunitas diutamakan"} />

     <Card 
     title={"Platinum"}
     price={200000}
     benefit1={"Akses penuh ke seluruh fitur premium"}
     benefit2={"Prioritas tertinggi support & layanan"}
     benefit3={"Penawaran ekslusif & early"}
     benefit4={"Dukungan komunitas diutamakan"} />

     </div>

     {/* <Carrd /> */}


     <Footer />
    </>
  );
}

export default App;
