// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Menu from ".";

export default {
  component: Menu,
  title: "Objects/Menu",
};

export const menu = () => <Menu>{text("propName", "default value")}</Menu>;
