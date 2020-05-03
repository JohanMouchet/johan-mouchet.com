// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import Table from ".";

export default {
  component: Table,
  title: "Objects/Table",
};

export const table = () => <Table>{text("propName", "default value")}</Table>;
