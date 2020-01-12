// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Label from ".";

storiesOf("Objects/Form/Layout", module)
  .add("default", () => <Label>{text("propName", "default value")}</Label>)
  .addDecorator(withKnobs);
