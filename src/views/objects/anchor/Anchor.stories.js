// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Anchor from ".";

export default {
  component: Anchor,
  title: "Objects/Anchor",
};

export const anchor = () => (
  <Anchor>{text("propName", "default value")}</Anchor>
);
