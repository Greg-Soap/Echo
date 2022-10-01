import React from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";
import "./posts.css";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
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
