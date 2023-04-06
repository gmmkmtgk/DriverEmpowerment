import React, { useState } from "react";
import "../styles/CommunityForum.css";

function CommunityForum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost("");
  };

  return (
    <div className="community-forum-container">
      <h1>Community Forum</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post">
            {post}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newPost}
          onChange={(event) => setNewPost(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommunityForum;
