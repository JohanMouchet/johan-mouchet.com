// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Field } from ".";

storiesOf("Objects/Form/Field", module)
  .add("default", () => <Field>{text("propName", "default value")}</Field>)
  .addDecorator(withKnobs);
