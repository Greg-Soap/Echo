import React from "react";
import { useSelector } from "react-redux";
import "./posts.css";
import { useState } from "react";
import { useEffect } from "react";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts);
  const [PostD, setPostD] = useState([]);
  useEffect(() => {
    async function fetchingPosts() {
      try {
        const response = await fetch("http://localhost:4000/posts");
        const PostRes = await response.json();
        setPostD(PostRes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchingPosts();
  }, []);
  return (
    <div className="Posts">
      <div className="post-wrapper">
        {PostD.map((post) => {
          return (
            <article className="post" key={post._id}>
              <div className="post-top">
                <img
                  src={post.selectedFile}
                  alt="post-img"
                  className="post-img"
                />
              </div>
              <div className="post-bot">
                <div className="post-title">{post.title}</div>
                <div className="post-creator">{post.creator}</div>
                <div className="post-desc">{post.message}</div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
