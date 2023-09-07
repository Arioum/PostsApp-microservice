import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:4000/posts", { title })
      .then((res) => console.log(res.data));

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className=''>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
