import React from "react";

function Range({ min, max, label, retrieveData, dataIn, id }) {
  const handleChange = (e) => {
    retrieveData(e.target.value, id);
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="range"
        className="form-range w-100"
        min={min}
        max={max}
        onChange={handleChange}
        id={id}
        value={dataIn}
      />
    </>
  );
}

export default Range;
