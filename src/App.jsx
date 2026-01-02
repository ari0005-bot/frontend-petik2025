import './App.jsx'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <>
    <Header />
    <Profile nama={"Ari"} />
     <h1>Kedai Koppi</h1>
     <h3>Peralatan Kopi Berkualitas</h3>
     <ul>
      <li>Mesin espresso</li>
      <li>penggiling kopi</li>
      <li>French press</li>
     </ul>

     <Menu /> 

     <img src="https://picsum.photos/200/300/" alt="gambar" />
     <Footer nama="Ari(ARR TechZone)" />
    </>
  )
}

export default App
