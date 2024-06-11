import type { Meta, StoryObj } from "@storybook/react";
import { Skills } from "./Skills";

const meta = {
  title: "Components/Skills",
  component: Skills,
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    skills: [
      {
        label: "Label",
      },
    ],
  },
} satisfies Story;
