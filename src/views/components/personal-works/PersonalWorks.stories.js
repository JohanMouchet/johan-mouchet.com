// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import PersonalWorks from ".";

export default {
  component: PersonalWorks,
  title: "Components/PersonalWorks",
};

export const personalWorks = () => (
  <PersonalWorks>{text("propName", "default value")}</PersonalWorks>
);
