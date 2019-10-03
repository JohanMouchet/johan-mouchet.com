// @flow

import * as React from "react";
import { HTML, MastHeader, MastFooter } from "../partials";
import "../../assets/styles/_styles.scss";

const Default = (props, children) => {
  const { metadata } = props;

  return (
    <HTML metadata={metadata}>
      <MastHeader />
      {children}
      <MastFooter />
    </HTML>
  );
};

export default Default;
