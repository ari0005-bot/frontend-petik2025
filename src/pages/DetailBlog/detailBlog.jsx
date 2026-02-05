import { useParams } from "react-router-dom";
import MyNavbar from "../../components/Navbar/MyNavbar";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const DetailBlog = ()=> {
    const [post, setPost] = useState("");
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postRespone = await axios.get(`
                    https://jsonplaceholder.typicode.com/posts/${id}`,);

                    const commentsResponse = await axios.get('https://jsonplaceholder.typicode.com/comments')
                    
                        setComments(commentsResponse.data)
                    setPost(postRespone.data);
            } catch (error) {
                console.log(error);
                
            }
        };

        fetchData();
    }, [id])
    return(
        <div>
            <MyNavbar />
            <h1>DetailBlog</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.name}</p>
            <hr />
            <hr />
            <h4>Komentar</h4>
            {
                comments.filter((comment) => comment.postId === Number(id))
                .map((comment) => (
                    <div key={comment.id} style={{border: "1px solid grey", margin: "6px", padding: "6px"}}>
                        <b>{comment.name}</b>
                        <p>{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
            <Footer />
        </div>
    )
}

export default DetailBlog;