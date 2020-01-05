// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Range from ".";

storiesOf("Objects/Form/Range", module)
  .add("default", () => <Range>{text("propName", "default value")}</Range>)
  .addDecorator(withKnobs);
