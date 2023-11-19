import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Toggles";

const meta = {
  title: "Objects/Form/Toggles/Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: (args) => (
    <>
      <Radio {...args} value={args.value + "1"}>
        {args.children} 1
      </Radio>
      <Radio {...args} value={args.value + "2"}>
        {args.children} 2
      </Radio>
    </>
  ),
  args: { name: "choice", value: "option", children: "Radio" },
} satisfies Story;
