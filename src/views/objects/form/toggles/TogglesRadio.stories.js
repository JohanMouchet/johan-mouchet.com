// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import { Checkbox, Radio } from ".";

export default {
  component: Checkbox,
  title: "Objects/Form/Toggles",
};

export const checkbox = () => (
  <Checkbox>{text("propName", "default value")}</Checkbox>
);

export const radio = () => <Radio>{text("propName", "default value")}</Radio>;
