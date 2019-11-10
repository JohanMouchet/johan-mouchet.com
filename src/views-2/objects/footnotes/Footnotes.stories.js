// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Footnotes from ".";

storiesOf("Objects/Footnotes", module)
  .add("default", () => (
    <Footnotes>{text("propName", "default value")}</Footnotes>
  ))
  .addDecorator(withKnobs);
