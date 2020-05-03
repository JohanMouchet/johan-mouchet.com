// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import { FootnotesReference } from ".";

export default {
  component: FootnotesReference,
  title: "Objects/Footnotes",
};

export const footnotes = () => (
  <FootnotesReference>{text("propName", "default value")}</FootnotesReference>
);
