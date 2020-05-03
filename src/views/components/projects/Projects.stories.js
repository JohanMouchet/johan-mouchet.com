// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Projects from ".";

export default {
  component: Projects,
  title: "Components/Projects",
};

export const projects = () => (
  <Projects>{text("propName", "default value")}</Projects>
);
