// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import SocialMedia from ".";

export default {
  component: SocialMedia,
  title: "Components/SocialMedia",
};

export const socialMedia = () => (
  <SocialMedia>{text("propName", "default value")}</SocialMedia>
);
