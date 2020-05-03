// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Alert from ".";

export default {
  component: Alert,
  title: "Objects/Alert",
};

export const alert = () => <Alert>{text("propName", "default value")}</Alert>;
