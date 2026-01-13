import './App.css'
import { useState } from 'react'
import Content from './components/Content/Content.jsx'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile'
import Menu from './components/Menu/Menu.jsx'
import Hero from './components/Hero/Hero.jsx'

import blackAroma from "./components/img/Black Aroma.png";
import moda from "./components/img/moda.png"
import taro from "./components/img/taro.jpeg"
import colBree from "./components/img/coldBree.jpeg"

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

function App() {
  const [search, setSearch] = useState("");

  const filteredMenu = menuKopi.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='body'>
      <Navbar onSearch={setSearch} />
      <Hero />
      <Profile />
      <Content />
      <Menu data={filteredMenu}/>
      <Footer nama="Ari(ARR TechZone)" />
    </div>
  )
}

export default App
