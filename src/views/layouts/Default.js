// @flow

import * as React from "react";
import { MastHeader, MastFooter } from "../partials";
import "../../assets/styles/_styles.scss";

const Default = (props, children) => {
  return (
    <>
      <MastHeader />
      {children}
      <MastFooter />
    </>
  );
};

export default Default;
