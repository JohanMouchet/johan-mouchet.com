// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Figure from ".";

export default {
  component: Figure,
  title: "Objects/Figure",
};

export const figure = () => (
  <Figure>{text("propName", "default value")}</Figure>
);
