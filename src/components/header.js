import React from "react";
import PropTypes from "prop-types";

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <header className="site-header">{children}</header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
