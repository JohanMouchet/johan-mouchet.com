import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta = {
  title: "Objects/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    tabs: [
      {
        thumb: "Thumb 1",
        panel: "Thumb 1",
      },
      {
        thumb: "Thumb 2",
        panel: "Thumb 2",
      },
    ],
  },
} satisfies Story;
