// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Checkbox, Radio } from ".";

storiesOf("Objects/Form/Toggles", module)
  .add("Checkbox", () => (
    <Checkbox>{text("propName", "default value")}</Checkbox>
  ))
  .add("Radio", () => <Radio>{text("propName", "default value")}</Radio>)
  .addDecorator(withKnobs);
