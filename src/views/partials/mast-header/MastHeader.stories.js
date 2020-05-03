// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import MastHeader from ".";

export default {
  component: MastHeader,
  title: "Partials/MastHeader",
};

export const mastHeader = () => (
  <MastHeader>{text("propName", "default value")}</MastHeader>
);
