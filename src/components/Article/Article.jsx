import { useState } from "react";
import Search from "../Search/Search";

const Article = ({ posts = [] }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [postTotal, setPostsTotal] = useState(posts.length);

  const onChangeSearch = (searchTerm) => {
    const filteredData = posts.filter((post) => {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredPosts(filteredData);
    setPostsTotal(filteredData.length);
  };

  return (
    <div>
      <Search totalPost={postTotal} onSearchChange={onChangeSearch} />

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
