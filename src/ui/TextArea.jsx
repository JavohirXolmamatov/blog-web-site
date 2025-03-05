import React from "react";

function TextArea({ label, state, setState, heights = "100px" }) {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder={label}
        id="floatingTextarea"
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{ height: heights }}
      ></textarea>
      <label htmlFor="floatingTextarea">{label}</label>
    </div>
  );
}

export default TextArea;
