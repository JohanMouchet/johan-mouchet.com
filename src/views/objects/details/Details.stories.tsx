import type { Meta, StoryObj } from "@storybook/react";
import { Details } from "./Details";

const meta = {
  title: "Objects/Details",
  component: Details,
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { summary: "Summary", children: "Children" },
} satisfies Story;
