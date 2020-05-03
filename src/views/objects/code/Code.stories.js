// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Code from ".";

export default {
  component: Code,
  title: "Objects/Code",
};

export const code = () => <Code>{text("propName", "default value")}</Code>;
