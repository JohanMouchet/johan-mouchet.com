// @flow

import * as React from "react";
import { HTML } from "../partials/HTML";
import { MastHeader } from "../partials/MastHeader";
import { MastFooter } from "../partials/MastFooter";

const ___ = children => {
  return (
    <HTML>
      <MastHeader />
      {children}
      <MastFooter />
    </HTML>
  );
};
