// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import PersonalWorks from ".";

storiesOf("Components/PersonalWorks", module)
  .add("default", () => (
    <PersonalWorks>{text("propName", "default value")}</PersonalWorks>
  ))
  .addDecorator(withKnobs);
