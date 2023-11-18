import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "./Anchor";

const meta = {
  title: "Objects/Anchor",
  component: Anchor,
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { id: "#", children: "Anchor (hover)" },
} satisfies Story;
