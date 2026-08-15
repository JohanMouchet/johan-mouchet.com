import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Range } from "./Range";

const meta = {
  title: "Objects/Form/Range",
  component: Range,
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { name: "name" },
} satisfies Story;
