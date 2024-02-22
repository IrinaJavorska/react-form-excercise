import React from "react";

function Button({ label, retrieveEvent, id }) {
  const handleClick = () => {
    retrieveEvent(id);
  };
  return (
    <button
      type="button"
      id={id}
      onClick={handleClick}
      className="btn btn-outline-secondary"
    >
      {label}
    </button>
  );
}

export default Button;
