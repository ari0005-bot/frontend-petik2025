import { useState } from "react";

const Article = ({ posts = [] }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some((tag) =>
      tag.toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  return (
    <div>
      <h2>Daftar Artikel</h2>

      Cari artikel:{" "}
      <input
        type="text"
        value={search}
        onChange={handleChangeSearch}
      />

      <br />
      <small>
        Ditemukan <b>{filteredPosts.length}</b> data dengan kata:{" "}
        <b>{search}</b>
      </small>

      <br />
      <br />

      {filteredPosts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <small>
            {post.author} - {post.date} | tags: {post.tags.join(", ")}
          </small>
         
        </div>
      ))}
    </div>
  );
};

export default Article;
