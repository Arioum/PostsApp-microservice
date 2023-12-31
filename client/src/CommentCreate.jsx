import { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`http://posts.com/posts/${postId}/comments`, { content })
      .then((res) => console.log(res.data));

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className=''>
          <label htmlFor=''>New Comment</label>
          <input
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
