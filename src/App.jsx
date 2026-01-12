import "./App.css";
import Article from "./components/Article/Article";
import Counter from "./components/Counter/Counter";
import Lifecycle from "./components/Lifecycle/Lifexycle";
import posts from "./posts.json";

function App() {
  return (
    <>
      <Article posts={posts} />

      <h3>Top Author</h3>
      <ol>
        {posts.map((post, index) => (
          <li key={index}>{post.author}</li>
        ))}
      </ol>

      <button onClick={() => alert("Hello World")}>
        Click Me!
      </button>

      <Counter />
      <Lifecycle />
    </>
  );
}

export default App;
