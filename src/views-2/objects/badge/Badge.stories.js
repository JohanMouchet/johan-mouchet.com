// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Badge from "./";

storiesOf("Objects/Badge", module)
  .add("default", () => <Badge>{text("Children", "+1")}</Badge>)
  .addDecorator(withKnobs);
