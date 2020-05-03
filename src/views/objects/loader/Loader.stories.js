// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Loader from ".";

export default {
  component: Loader,
  title: "Objects/Loader",
};

export const loader = () => (
  <Loader>{text("propName", "default value")}</Loader>
);
