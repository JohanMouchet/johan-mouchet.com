// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import File from ".";

storiesOf("Objects/Form/File", module)
  .add("default", () => <File>{text("propName", "default value")}</File>)
  .addDecorator(withKnobs);
