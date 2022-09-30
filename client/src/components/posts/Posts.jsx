import React from "react";
import Post from "./post/Post";
import "./posts.css";
const Posts = () => {
  return (
    <div className="Posts">
      <div className="post-wrapper">
        {/* {Posts.map((post) => {
          <Post post={post} />;
        })} */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />

        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
