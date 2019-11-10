// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Menu from ".";

storiesOf("Objects/Menu", module)
  .add("default", () => <Menu>{text("propName", "default value")}</Menu>)
  .addDecorator(withKnobs);
