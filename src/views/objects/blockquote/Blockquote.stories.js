// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Blockquote from ".";

storiesOf("Objects/Blockquote", module)
  .add("default", () => (
    <Blockquote>{text("propName", "default value")}</Blockquote>
  ))
  .addDecorator(withKnobs);
