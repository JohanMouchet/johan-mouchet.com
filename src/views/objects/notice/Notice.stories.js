// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Notice from ".";

export default {
  component: Notice,
  title: "Objects/Notice",
};

export const notice = () => (
  <Notice>{text("propName", "default value")}</Notice>
);
