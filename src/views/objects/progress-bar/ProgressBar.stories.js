// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import ProgressBar from ".";

export default {
  component: ProgressBar,
  title: "Objects/ProgressBar",
};

export const progressBar = () => (
  <ProgressBar>{text("propName", "default value")}</ProgressBar>
);
