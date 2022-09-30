import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="Form">
      <div className="form-wrapper">
        <h2>Leave Your Echo</h2>
        <div className="form-group">
          <input type="text" className="form-control" />
          <label className="form-label">Creator</label>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" />
          <label className="form-label">Title</label>
        </div>
        <div className="form-group">
          <textarea type="text" className="form-control" rows={7} />
          <label className="form-label">Message</label>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" />
          <label className="form-label">Tags (comma separated)</label>
        </div>

        <div className="fileimage"></div>
        <button className="submit-btn">Submit</button>
        <button className="clear-btn">Clear</button>
      </div>
    </div>
  );
};

export default Form;
