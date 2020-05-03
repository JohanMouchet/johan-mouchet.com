// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Details from ".";

export default {
  component: Details,
  title: "Objects/Details",
};

export const details = () => (
  <Details>{text("propName", "default value")}</Details>
);
