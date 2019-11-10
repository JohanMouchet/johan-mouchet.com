// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import MastHeader from ".";

storiesOf("Partials/MastHeader", module)
  .add("default", () => (
    <MastHeader>{text("propName", "default value")}</MastHeader>
  ))
  .addDecorator(withKnobs);
