// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Badge from "./";

export default {
  component: Badge,
  title: "Objects/Badge",
};

export const badge = () => <Badge>{text("Children", "+1")}</Badge>;
