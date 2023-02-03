import FileBase from "react-file-base64";
import { useGlobalContext } from "../context/Context";

export default function Form() {
  const { handleSubmit, postWrite, setPostWrite } = useGlobalContext();

  const clear = () => {};
  return (
    <aside className="Form">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h2>Leave Your Echo</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={postWrite.creator}
            onChange={(e) =>
              setPostWrite({ ...postWrite, creator: e.target.value })
            }
          />
          <label className="form-label">Creator</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={postWrite.title}
            onChange={(e) =>
              setPostWrite({ ...postWrite, title: e.target.value })
            }
          />
          <label className="form-label">Title</label>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            value={postWrite.message}
            onChange={(e) =>
              setPostWrite({ ...postWrite, message: e.target.value })
            }
            rows={7}
          />
          <label className="form-label">Message</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={postWrite.tags}
            onChange={(e) =>
              setPostWrite({ ...postWrite, tags: e.target.value })
            }
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
              setPostWrite({ ...postWrite, selectedFile: base64 })
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
