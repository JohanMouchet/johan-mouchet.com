// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import Badge from "./";

storiesOf("Badge", module).add("default", () => (
  <Badge>{text("children", "1")}</Badge>
));
