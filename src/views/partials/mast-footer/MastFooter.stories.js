// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import MastFooter from ".";

export default {
  component: MastFooter,
  title: "Partials/MastFooter",
};

export const mastFooter = () => (
  <MastFooter>{text("propName", "default value")}</MastFooter>
);
