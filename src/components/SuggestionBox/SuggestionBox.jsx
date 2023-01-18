import PropTypes from "prop-types";
import React from "react";

import "./styles.scss";

const SuggestionBox = ({ data = [], onItemRender = (item) => null }) => {
  const renderItem = React.useCallback(
    (item) => {
      return onItemRender(item);
    },
    [onItemRender]
  );

  if (!data.length) return <div />;

  return (
    <div className="suggestion-box-container">
      {data.map((item) => renderItem(item))}
    </div>
  );
};

SuggestionBox.propTypes = {
  data: PropTypes.array,
  onItemRender: PropTypes.func,
};

export default SuggestionBox;
