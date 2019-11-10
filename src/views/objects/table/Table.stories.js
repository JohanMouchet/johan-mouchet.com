// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Table from ".";

storiesOf("Objects/Table", module)
  .add("default", () => <Table>{text("propName", "default value")}</Table>)
  .addDecorator(withKnobs);
