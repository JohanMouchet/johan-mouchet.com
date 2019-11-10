// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import MastAside from ".";

storiesOf("Partials/ MastAside", module)
  .add("default", () => (
    <MastAside>{text("propName", "default value")}</MastAside>
  ))
  .addDecorator(withKnobs);
