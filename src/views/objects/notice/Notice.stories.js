// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Notice from ".";

storiesOf("Objects/Notice", module)
  .add("default", () => <Notice>{text("propName", "default value")}</Notice>)
  .addDecorator(withKnobs);
