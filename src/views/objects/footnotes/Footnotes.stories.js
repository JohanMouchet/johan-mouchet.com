// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { FootnotesReference } from ".";

storiesOf("Objects/Footnotes", module)
  .add("default", () => (
    <FootnotesReference>{text("propName", "default value")}</FootnotesReference>
  ))
  .addDecorator(withKnobs);
