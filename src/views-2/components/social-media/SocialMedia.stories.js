// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import SocialMedia from ".";

storiesOf("Components/SocialMedia", module)
  .add("default", () => (
    <SocialMedia>{text("propName", "default value")}</SocialMedia>
  ))
  .addDecorator(withKnobs);
