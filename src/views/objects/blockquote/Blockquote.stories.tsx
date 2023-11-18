import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "./Blockquote";

const meta = {
  title: "Objects/Blockquote",
  component: Blockquote,
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { quote: "Quote", cite: "Cite" },
} satisfies Story;
