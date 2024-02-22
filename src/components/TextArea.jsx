import React from "react";

function TextArea({ label, dataIn, retrieveData, height, id }) {
  const handleChange = (e) => {
    retrieveData(e.target.value, id);
  };
  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="form-control"
        onChange={handleChange}
        value={dataIn}
        id={id}
        style={{ height: `${height}px` }}
      />
    </>
  );
}

export default TextArea;
