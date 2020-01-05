// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Form from ".";

storiesOf("Objects/Form/Toggles", module)
  .add("default", () => <Form>{text("propName", "default value")}</Form>)
  .addDecorator(withKnobs);
