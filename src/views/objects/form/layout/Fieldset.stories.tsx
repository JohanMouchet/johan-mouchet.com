import type { Meta, StoryObj } from "@storybook/react";
import { Fieldset } from "./Layout";

const meta = {
  title: "Objects/Form/Layout/Fieldset",
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { legend: "legend", children: "Children" },
} satisfies Story;
