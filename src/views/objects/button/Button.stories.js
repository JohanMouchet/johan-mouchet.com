// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Button } from ".";

storiesOf("Objects/Button", module)
  .add("default", () => <Button>{text("propName", "default value")}</Button>)
  .addDecorator(withKnobs);
