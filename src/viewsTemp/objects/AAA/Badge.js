import React from "react";
import { string } from "prop-types";
import "./badge.scss";

const Badge = props => {
  const { children } = props;

  return <span className="o-badge">{children}</span>;
};

Badge.propTypes = {
  children: string.isRequired
};

export default Badge;
