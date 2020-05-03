// @flow

import * as React from "react";
import { text } from "@storybook/addon-knobs";
import AcademicQualification from ".";

export default {
  component: AcademicQualification,
  title: "Components/AcademicQualification",
};

export const academicQualification = () => (
  <AcademicQualification>
    {text("propName", "default value")}
  </AcademicQualification>
);
