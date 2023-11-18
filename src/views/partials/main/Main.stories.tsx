import type { Meta, StoryObj } from "@storybook/react";
import { Main } from "./Main";

const meta = {
  title: "Partials/Main",
  component: Main,
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    children: "Main",
  },
} satisfies Story;
