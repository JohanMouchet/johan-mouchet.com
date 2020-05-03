// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Tabs from ".";

export default {
  component: Tabs,
  title: "Objects/Tabs",
};

export const tabs = () => <Tabs>{text("propName", "default value")}</Tabs>;
