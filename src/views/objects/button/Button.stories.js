// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import { Button } from ".";

export default {
  component: Button,
  title: "Objects/Button",
};

export const button = () => (
  <Button>{text("propName", "default value")}</Button>
);
