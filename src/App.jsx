import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import About from "./pages/About/About.jsx";
import DetailBlog from "./pages/DetailBlog/detailBlog.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Blogs />} />
        <Route path="/posts/detail" element={<DetailBlog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
