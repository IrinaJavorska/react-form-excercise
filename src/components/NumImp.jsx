import React from "react";

function NumImp({ dataIn, label, retrieveData, id }) {
  const handleChange = (e) => {
    retrieveData(e.target.value, id);
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        className="form-control"
        value={dataIn}
        id={id}
        onChange={handleChange}
      />
    </>
  );
}

export default NumImp;
