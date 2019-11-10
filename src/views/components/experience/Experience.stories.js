// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Experience from ".";

storiesOf("Components/Experience", module)
  .add("default", () => (
    <Experience>{text("propName", "default value")}</Experience>
  ))
  .addDecorator(withKnobs);
