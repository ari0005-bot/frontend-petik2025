import { useEffect, useState } from "react";
import Search from "../Search/Search";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Article = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [postTotal, setPostsTotal] = useState(posts.length);
  const [authors, setAuthor] = useState(posts);

  // useEffect(() => {
    // // sideffect: contoh untuk pengambilan data
    // console.log("Komponen untuk pengambilan data");

    // return ()=> {
    //   //cleanup: membersihkan efek
    //   console.log("Membersihkan sebelum kompoen dilepas");
      
    // }
    // setFilteredPosts(posts);
    // setPostsTotal(posts.length)
  // }, [filteredPosts])
  // efek berjalan jika data pada array berubah, jika array kosong
  // maka hanya berjalan sekali saat komponen pertama kali dibuat(mount)

  useEffect(() => {
    const fetData = async () => {
      try {
        const postsRespone = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const userResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        )

        console.log(userResponse);
        
        setFilteredPosts(postsRespone.data);
        setPostsTotal(postsRespone.data.length);
        setPosts(postsRespone.data);
        setAuthor(userResponse.data)
      } catch (error) {
        console.log(error);
        
      }
    };

    fetData();
  }, [])

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
      {filteredPosts.map((post, index) => {
        const author = authors.find((user) => user.id == post.userId);

        return(
          <div key={index}>
            <NavLink to={`/posts/${post.id}`}>
               <h3>{post.title}</h3>
            </NavLink>
         
          <small>
          - Author: <b>{author ? author.name : "Unknow"}, {post.author}</b>,
          Date: {post.date}, Tags: {post.tags}
          </small>
        </div>
        )
        
    })}
    </div>
  );
};

export default Article;
