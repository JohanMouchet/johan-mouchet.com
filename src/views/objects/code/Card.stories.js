// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Code from ".";

storiesOf("Objects/Code", module)
  .add("default", () => <Code>{text("propName", "default value")}</Code>)
  .addDecorator(withKnobs);
