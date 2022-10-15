import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import "./form.css";
import { createPost } from "../../actions/posts";
const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <div className="Form">
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
            type="text"
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
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button className="submit-btn">Submit</button>
        <button className="clear-btn" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
