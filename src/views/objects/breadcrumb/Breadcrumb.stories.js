// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Breadcrumb from ".";

export default {
  component: Breadcrumb,
  title: "Objects/Breadcrumb",
};

export const breadcrumb = () => (
  <Breadcrumb>{text("propName", "default value")}</Breadcrumb>
);
