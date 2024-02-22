import React from "react";

function Select({ dataIn, label, retrieveData, selectedValue, id }) {
  const handleChange = (e) => {
    retrieveData(e.target.value, id);
  };

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <select
        className="form-select"
        id={id}
        onChange={handleChange}
        value={selectedValue}
      >
        {dataIn.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
