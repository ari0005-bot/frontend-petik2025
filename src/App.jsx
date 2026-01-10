import './App.jsx'
import Content from './components/Content/Content.jsx'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile'
import Menu from './components/Menu/Menu.jsx'
import Hero from './components/Hero/Hero.jsx'


function App() {

  return (
    <>
    <div className='body'>
    <Navbar />
    <Hero />
    <Profile />
    <Content />
    <Menu />
    
    <Footer nama="Ari(ARR TechZone)" />
    </div>
  </>
  )
}

export default App
