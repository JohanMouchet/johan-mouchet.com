// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import MastFooter from ".";

storiesOf("Partials/MastFooter", module)
  .add("default", () => (
    <MastFooter>{text("propName", "default value")}</MastFooter>
  ))
  .addDecorator(withKnobs);
