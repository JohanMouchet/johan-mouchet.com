// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Breadcrumb from ".";

storiesOf("Objects/Breadcrumb", module)
  .add("default", () => (
    <Breadcrumb>{text("propName", "default value")}</Breadcrumb>
  ))
  .addDecorator(withKnobs);
