// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Anchor from ".";

storiesOf("Objects/Anchor", module)
  .add("default", () => <Anchor>{text("propName", "default value")}</Anchor>)
  .addDecorator(withKnobs);
