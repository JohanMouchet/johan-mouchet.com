// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import MastAside from ".";

export default {
  component: MastAside,
  title: "Partials/MastAside",
};

export const mastAside = () => (
  <MastAside>{text("propName", "default value")}</MastAside>
);
