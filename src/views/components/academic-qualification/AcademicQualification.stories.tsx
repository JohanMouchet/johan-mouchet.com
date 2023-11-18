import type { Meta, StoryObj } from "@storybook/react";
import { AcademicQualification } from "./AcademicQualification";

const meta = {
  title: "Components/AcademicQualification",
  component: AcademicQualification,
} satisfies Meta<typeof AcademicQualification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    degrees: [
      {
        establishmentName: "Name",
        establishmentLink: {
          url: "#",
        },
        location: "Location",
        graduationYear: new Date().getFullYear(),
        title: "Title",
      },
    ],
  },
} satisfies Story;
