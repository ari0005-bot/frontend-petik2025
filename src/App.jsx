
import Header from "../src/component/Header/Header";
import Footer from "../src/component/Footer/Footer";
import Profile from "../src/component/Profile/Profile";
import Customer from "../src/component/Customer/Customer";

function App() {
// Jadi kalau mau masukan kode Javascript/logicnya harus di sini gak boleh di luar //
  const a = 12;
  const b = 12;
  console.log(a+b);
  
  return (
    <>
    <Header />
     <h1>To-do List :</h1>
     <ol>
      <li>Mengerjakan Tugas Front End</li>
      <li>Mempelajari Tutorial React JS</li>
      <li>Murojaah</li>
     </ol>

     {/* Ini props buat sendiri */}
     {/* <Profile nama="Udin" alamat={"Bandung"} umur={17} />
      <Profile nama="Sudin" alamat={"Jakarta"} umur={18} /> */}
      <Customer nama="Jony" alamat={"Jakarta"} membership={"Premium"} />
      <Customer nama="Benny" alamat={"Jakarta"} membership={"Gold"} />
      <Customer nama="Budi" alamat={"Jakarta"} membership={"Platinum"} />
    
    {/* Ini props yang sudah ditentukan */}
     <img src="https://picsum.photos/200/300" alt="gambar" />
    <Footer nama="Jubed Junaedi" />
    </>
  );
}




export default App
