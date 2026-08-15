import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./Layout";

const meta = {
  title: "Objects/Form/Layout/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { children: "Label" },
} satisfies Story;
