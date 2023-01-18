import React from "react";
import PropTypes from "prop-types";

import "./styles.scss";

const Layout = ({ children }) => {
  return <div className="root-layout-container">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
