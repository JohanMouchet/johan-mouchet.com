// @flow

import * as React from "react";
import { MastHeader, MastFooter } from "views/partials";
import "assets/styles/_styles.scss";

const Default = ({ children }) => (
  <div className="l-layout">
    <div className="l-layout__inner">
      <MastHeader />
      {children}
      <MastFooter />
    </div>
  </div>
);

export default Default;
