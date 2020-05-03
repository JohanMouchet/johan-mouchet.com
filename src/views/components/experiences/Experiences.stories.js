// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Experiences from ".";

export default {
  component: Experiences,
  title: "Components/Experiences",
};

export const experiences = () => (
  <Experiences>{text("propName", "default value")}</Experiences>
);
