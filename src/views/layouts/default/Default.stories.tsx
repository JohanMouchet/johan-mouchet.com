import type { Meta, StoryObj } from "@storybook/react";
import { Default } from "./Default";

const meta = {
  title: "Layouts/Default",
  component: Default,
} satisfies Meta<typeof Default>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { children: "Default" },
} satisfies Story;
