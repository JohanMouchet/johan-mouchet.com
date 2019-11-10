// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import List from ".";

storiesOf("Objects/List", module)
  .add("default", () => <List>{text("propName", "default value")}</List>)
  .addDecorator(withKnobs);
