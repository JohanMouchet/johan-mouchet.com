// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Alert from ".";

storiesOf("Objects/Alert", module)
  .add("default", () => <Alert>{text("propName", "default value")}</Alert>)
  .addDecorator(withKnobs);
