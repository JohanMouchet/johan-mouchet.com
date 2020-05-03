// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import List from ".";

export default {
  component: List,
  title: "Objects/List",
};

export const list = () => <List>{text("propName", "default value")}</List>;
