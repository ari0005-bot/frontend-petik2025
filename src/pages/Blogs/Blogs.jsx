import Article from "../../components/Article/Article.jsx"
import Footer from "../../components/Footer/Footer.jsx";
import MyNavbar from "../../components/Navbar/MyNavbar.jsx";

const Blogs = () => {
    return(
        <div>
            <MyNavbar />
            <h1>Daftar Artikel</h1>
        <Article />
        <Footer />
        </div>
    )
}

export default Blogs;