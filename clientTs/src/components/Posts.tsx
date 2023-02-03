import { useGlobalContext } from "../context/Context";
import { IPosts } from "../types/Types";

export default function Posts() {
  const { postData } = useGlobalContext();
  return (
    <section className="Posts">
      <div className="post-wrapper">
        {postData.map((post: IPosts) => {
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
