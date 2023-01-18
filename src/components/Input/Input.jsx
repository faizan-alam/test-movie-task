import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Input = ({ placeholder, onChange, value }) => {
  const handleChangeInput = (event) => {
    onChange(event.currentTarget.value);
  };
  return (
    <input
      className="root-input-container"
      placeholder={placeholder}
      onChange={handleChangeInput}
      value={value}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
