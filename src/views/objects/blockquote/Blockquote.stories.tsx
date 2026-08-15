import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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
