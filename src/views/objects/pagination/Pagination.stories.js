// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Pagination from "./";

export default {
  component: Pagination,
  title: "Objects/Pagination",
};

export const pagination = () => (
  <Pagination>{text("propName", "default value")}</Pagination>
);
