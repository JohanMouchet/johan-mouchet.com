// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Label from ".";

export default {
  component: Label,
  title: "Objects/Form/Layout",
};

export const label = () => <Label>{text("propName", "default value")}</Label>;
