// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Experience from ".";

export default {
  component: Experience,
  title: "Components/Experience",
};

export const experience = () => (
  <Experience>{text("propName", "default value")}</Experience>
);
