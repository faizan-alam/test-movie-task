import PropTypes from "prop-types";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { SuggestionBox } from "../SuggestionBox";
import DropDownItem from "./DropDownItem";

import "./styles.scss";

const DropDown = ({ placeholder, onItemRender, data, selected, onChange }) => {
  const [visible, setVisible] = React.useState(false);

  const anyItem = React.useMemo(
    () => `Any ${String(placeholder).toLocaleLowerCase()}`,
    [placeholder]
  );

  const handleItemRender = (item) => {
    return (
      <DropDownItem
        anyItem={anyItem}
        key={item}
        selected={selected}
        onItemRender={onItemRender}
        onChange={onChange}
        value={item}
      />
    );
  };

  const handleToggleVisibility = () => setVisible((pre) => !pre);

  return (
    <div className="root-dropdown-auto-complete">
      <div className="label-container" onClick={handleToggleVisibility}>
        <p>{placeholder}</p>
        {visible ? <FaArrowDown /> : <FaArrowUp />}
      </div>

      {visible && (
        <div className="suggestion-root-container">
          <SuggestionBox
            data={[anyItem, ...data]}
            onItemRender={handleItemRender}
          />
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  data: PropTypes.any,
  onChange: PropTypes.any,
  onItemRender: PropTypes.any,
  placeholder: PropTypes.any,
  selected: PropTypes.any,
};

export default DropDown;
