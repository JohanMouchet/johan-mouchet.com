// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Layout from ".";

storiesOf("Objects/Form/Layout", module)
  .add("default", () => <Layout>{text("propName", "default value")}</Layout>)
  .addDecorator(withKnobs);
