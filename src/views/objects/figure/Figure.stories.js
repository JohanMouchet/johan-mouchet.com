// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Figure from ".";

storiesOf("Objects/Figure", module)
  .add("default", () => <Figure>{text("propName", "default value")}</Figure>)
  .addDecorator(withKnobs);
