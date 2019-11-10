// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ProgressBar from ".";

storiesOf("Objects/ProgressBar", module)
  .add("default", () => (
    <ProgressBar>{text("propName", "default value")}</ProgressBar>
  ))
  .addDecorator(withKnobs);
