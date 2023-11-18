import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Fields";

const meta = {
  title: "Objects/Form/Fields/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    id: "id",
    name: "name",
    options: [
      {
        children: "Option 1",
        value: "Option 1",
      },
      {
        children: "Option 2",
        value: "Option 2",
      },
    ],
    children: "Children",
  },
} satisfies Story;
