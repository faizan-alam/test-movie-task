import PropTypes from "prop-types";
import React from "react";
import { Input } from "../Input";
import { SuggestionBox } from "../SuggestionBox";

import "./styles.scss";

const InputAutoComplete = ({
  placeholder,
  onTextChange,
  onItemRender,
  data,
}) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleChangeInput = (value) => {
    if (onTextChange) onTextChange(value);
    setInputValue(value);
  };

  return (
    <div className="root-input-auto-complete">
      <Input
        placeholder={placeholder}
        onChange={handleChangeInput}
        value={inputValue}
      />
      <SuggestionBox data={data} onItemRender={onItemRender} />
    </div>
  );
};

InputAutoComplete.propTypes = {
  data: PropTypes.array,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
  onItemRender: PropTypes.func,
};

export default InputAutoComplete;
