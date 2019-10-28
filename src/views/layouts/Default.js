// @flow

import * as React from "react";
import { MastHeader, MastFooter } from "views/partials";
import "assets/styles/_styles.scss";

const Default = props => {
  const { children } = props;

  return (
    <>
      <MastHeader />
      {children}
      <MastFooter />
    </>
  );
};

export default Default;
