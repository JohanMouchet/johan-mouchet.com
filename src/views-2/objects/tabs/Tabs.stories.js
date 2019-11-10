// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Tabs from ".";

storiesOf("Objects/Tabs", module)
  .add("default", () => <Tabs>{text("propName", "default value")}</Tabs>)
  .addDecorator(withKnobs);
