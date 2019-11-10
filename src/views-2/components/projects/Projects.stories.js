// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Projects from ".";

storiesOf("Components/Projects", module)
  .add("default", () => (
    <Projects>{text("propName", "default value")}</Projects>
  ))
  .addDecorator(withKnobs);
