// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import AcademicQualification from ".";

storiesOf("Components/AcademicQualification", module)
  .add("default", () => (
    <AcademicQualification>
      {text("propName", "default value")}
    </AcademicQualification>
  ))
  .addDecorator(withKnobs);
