import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Toggles";

const meta = {
  title: "Objects/Form/Toggles/Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { name: "choice", value: "option", children: "Checkbox" },
} satisfies Story;
