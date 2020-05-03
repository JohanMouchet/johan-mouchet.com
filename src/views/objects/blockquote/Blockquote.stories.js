// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Blockquote from ".";

export default {
  component: Blockquote,
  title: "Objects/Blockquote",
};

export const blockquote = () => (
  <Blockquote>{text("propName", "default value")}</Blockquote>
);
