// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Details from ".";

storiesOf("Objects/Details", module)
  .add("default", () => <Details>{text("propName", "default value")}</Details>)
  .addDecorator(withKnobs);
