// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Card from ".";

export default {
  component: Card,
  title: "Objects/Card",
};

export const card = () => <Card>{text("propName", "default value")}</Card>;
