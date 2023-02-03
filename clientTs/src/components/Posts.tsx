import { useState } from "react";
import { useEffect } from "react";

export interface IPosts {
  _id: string;
  title: string;
  selectedFile: string;
  creator: string;
  message: string;
  tags: string;
  addedPost?: any;
}
export default function Posts() {
  const [PostD, setPostD] = useState<IPosts[]>([]);
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
    <section className="Posts">
      <div className="post-wrapper">
        {PostD.map((post: IPosts) => {
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
    </section>
  );
}
