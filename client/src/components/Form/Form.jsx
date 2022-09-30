import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="Form">
      <div className="form-wrapper">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Creator"
        />
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Title"
        />
        <textarea
          type="text"
          className="form-control"
          name="name"
          placeholder="Message"
        />
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Tags (comma separated)"
        />
        <div className="fileimage"></div>
        <button className="submit-btn">Submit</button>
        <button className="clear-btn">Clear</button>
      </div>
    </div>
  );
};

export default Form;
