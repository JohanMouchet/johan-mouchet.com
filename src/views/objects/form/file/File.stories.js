// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import File from ".";

export default {
  component: File,
  title: "Objects/Form/File",
};

export const file = () => <File>{text("propName", "default value")}</File>;
