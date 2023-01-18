import PropTypes from "prop-types";
import React from "react";

import "./styles.scss";

const DropDownItem = ({
  anyItem,
  value,
  onItemRender,
  selected = [],
  onChange,
}) => {
  const handleRenderValue = React.useCallback(
    (item) => {
      if (anyItem === item) return item;
      if (onItemRender) return onItemRender(item);
      return item;
    },
    [anyItem, onItemRender]
  );

  const isChecked = React.useMemo(() => {
    return selected.includes(value);
  }, [selected, value]);

  const handleChange = (event) => onChange(value, event.currentTarget.checked);

  return (
    <label className="item" key={value}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {handleRenderValue(value)}
    </label>
  );
};

DropDownItem.propTypes = {
  anyItem: PropTypes.string,
  onChange: PropTypes.func,
  onItemRender: PropTypes.func,
  selected: PropTypes.array,
  value: PropTypes.any,
};

export default DropDownItem;
