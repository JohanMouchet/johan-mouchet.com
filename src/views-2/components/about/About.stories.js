// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import About from ".";

storiesOf("Components/About", module)
  .add("default", () => <About>{text("propName", "default value")}</About>)
  .addDecorator(withKnobs);
