import type { Meta, StoryObj } from "@storybook/react";
import { Figure } from "./Figure";

const meta = {
  title: "Objects/Figure",
  component: Figure,
} satisfies Meta<typeof Figure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    src: "https://via.placeholder.com/500x250",
    alt: "Alt",
    caption: "Caption",
  },
} satisfies Story;
