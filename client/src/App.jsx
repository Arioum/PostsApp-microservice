import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <h1>Create Post</h1>
      <PostCreate />
      <br />
      <hr />
      <br />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
