import type { Meta, StoryObj } from "@storybook/react";
import { subYears } from "date-fns";
import { ExperienceDuration } from "./ExperienceDuration";

const meta = {
  title: "Components/ExperienceDuration",
  component: ExperienceDuration,
} satisfies Meta<typeof ExperienceDuration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    experiences: [
      {
        startDate: subYears(new Date(), 1).toISOString(),
        endDate: new Date().toISOString(),
      },
    ],
  },
} satisfies Story;
