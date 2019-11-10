// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Pagination from "./";

storiesOf("Objects/Pagination", module)
  .add("default", () => (
    <Pagination>{text("propName", "default value")}</Pagination>
  ))
  .addDecorator(withKnobs);
