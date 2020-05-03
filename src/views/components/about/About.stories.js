// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import About from ".";

export default {
  component: About,
  title: "Components/About",
};

export const about = () => <About>{text("propName", "default value")}</About>;
