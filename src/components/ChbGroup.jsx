import React from "react";
import { useEffect } from "react";

function ChbGroup({ label, id, dataIn, retrieveData, selectedValue }) {
  const handleChange = (e) => {
    //console.log("here handleChange");
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      retrieveData([...selectedValue, value], id);
    } else {
      retrieveData(
        selectedValue.filter((item) => item !== value),
        id
      );
    }
  };
  //useEffect(()=>{console.log(selectedValue)},[selectedValue]);
  return (
    <div id={id}>
      <div className="mb-1">{label}</div>
      {dataIn.map((item, index) => (
        <div key={index} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id={item.label}
            value={item.value}
            onChange={handleChange}
            checked={selectedValue.includes(item.value)}
          />
          <label className="form-check-label" htmlFor={item.label}>
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ChbGroup;
