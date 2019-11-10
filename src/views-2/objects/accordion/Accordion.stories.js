// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Accordion from ".";

storiesOf("Objects/Accordion", module)
  .add("default", () => (
    <Accordion>{text("propName", "default value")}</Accordion>
  ))
  .addDecorator(withKnobs);
