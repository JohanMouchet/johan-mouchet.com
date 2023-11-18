import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "./Fields";

const meta = {
  title: "Objects/Form/Fields/Field",
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { name: "name" },
} satisfies Story;
