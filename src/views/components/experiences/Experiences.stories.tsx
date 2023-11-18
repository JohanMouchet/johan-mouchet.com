import { Element } from "@prismicio/react";
import type { Meta, StoryObj } from "@storybook/react";
import { subYears } from "date-fns";
import { Experiences } from "./Experiences";

const meta = {
  title: "Components/Experiences",
  component: Experiences,
} satisfies Meta<typeof Experiences>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    experiences: [
      {
        companyLink: {
          url: "#",
        },
        companyName: "Name",
        location: "Location",
        jobTitle: "Job Title",
        startDate: subYears(new Date(), 1),
        present: false,
        endDate: new Date(),
        contractType: "Contract Type",
        lede: [
          {
            type: Element.paragraph,
            text: "Lede",
            spans: [],
          },
        ],
      },
    ],
  },
} satisfies Story;
