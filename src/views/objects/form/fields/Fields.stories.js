// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import { Field } from ".";

export default {
  component: Field,
  title: "Objects/Form/Field",
};

export const field = () => <Field>{text("propName", "default value")}</Field>;
