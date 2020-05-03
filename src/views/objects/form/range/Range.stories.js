// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Range from ".";

export default {
  component: Range,
  title: "Objects/Form/Range",
};

export const range = () => <Range>{text("propName", "default value")}</Range>;
