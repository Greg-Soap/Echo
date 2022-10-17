import React from "react";
import "./post.css";
import Dummy from "../../../assets/pexels-julian-jagtenberg-103123.jpg";
const Post = () => {
  return (
    <article className="post">
      <div className="post-top">
        <img src={Dummy} alt="post-img" className="post-img" />
      </div>
      <div className="post-bot">
        <div className="post-title">dummy</div>
        <div className="post-creator">dummy</div>
        <div className="post-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          quia.
        </div>
      </div>
    </article>
  );
};

export default Post;
