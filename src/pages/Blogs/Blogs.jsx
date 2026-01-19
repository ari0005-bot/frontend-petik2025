import React from "react";
import posts from "../../posts.json"
import Article from "../../components/Article/Article.jsx"
import Navbar from "../../components/Navbar/Navbar.jsx";

const Blogs = () => {
    return(
        <div>
            <Navbar />
            <h1>Daftar Artikel</h1>
        <Article posts={posts} />
        </div>
    )
}

export default Blogs;