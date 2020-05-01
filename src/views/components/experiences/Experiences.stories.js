// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Experiences from ".";

storiesOf("Components/Experiences", module)
  .add("default", () => (
    <Experiences>{text("propName", "default value")}</Experiences>
  ))
  .addDecorator(withKnobs);
