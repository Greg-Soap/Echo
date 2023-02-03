import { FormEvent, useState } from "react";
import FileBase from "react-file-base64";
import { IPosts } from "./Posts";

export default function Form() {
  const [postData, setPostData] = useState<IPosts>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    _id: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        creator: postData.creator,
        title: postData.title,
        message: postData.message,
        tags: postData.tags,
        selectedFile: postData.selectedFile,
      }),
    });
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      _id: "",
    });
    const addedPost = await response.json();
    setPostData({ ...postData, addedPost });
  };
  const clear = () => {};
  return (
    <aside className="Form">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h2>Leave Your Echo</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <label className="form-label">Creator</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <label className="form-label">Title</label>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            rows={7}
          />
          <label className="form-label">Message</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
          <label className="form-label">Tags (comma separated)</label>
        </div>

        <div className="fileImage">
          <label htmlFor="upload">upload</label>
          <FileBase
            type="file"
            id="upload"
            multiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button className="submit-btn">Submit</button>
        <button className="clear-btn" onClick={clear}>
          Clear
        </button>
      </form>
    </aside>
  );
}
