// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Card from ".";

storiesOf("Objects/Card", module)
  .add("default", () => <Card>{text("propName", "default value")}</Card>)
  .addDecorator(withKnobs);
