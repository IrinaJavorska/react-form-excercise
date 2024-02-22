import React from "react";

function ProgressBar({ value, id }) {
  // Předpokládáme, že `value` je hodnota mezi 0 a 100
  return (
    <div
      id={id}
      className="progress"
      role="progressbar"
      aria-label="Animated striped example"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        style={{ width: `${value}%` }} // Nastaví šířku progress baru podle hodnoty
      ></div>
    </div>
  );
}

export default ProgressBar;
