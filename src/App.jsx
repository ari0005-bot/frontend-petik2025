import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home.jsx'
import Menu from './pages/Menu/Menu.jsx'
import About from './pages/About/About.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
