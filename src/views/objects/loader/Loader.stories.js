// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Loader from ".";

storiesOf("Objects/Loader", module)
  .add("default", () => <Loader>{text("propName", "default value")}</Loader>)
  .addDecorator(withKnobs);
