import type { Meta, StoryObj } from "@storybook/react";
import { Aside } from "./Aside";

const meta = {
  title: "Partials/Aside",
  component: Aside,
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    children: "Aside",
  },
} satisfies Story;
