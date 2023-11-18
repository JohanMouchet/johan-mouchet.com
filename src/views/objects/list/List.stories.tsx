import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";

const meta = {
  title: "Objects/List",
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: (args) => (
    <List {...args}>
      <li>Parent 1</li>
      <li>Parent 2</li>
      <li>
        Parent 3
        <List as={args.as}>
          <li>Child 1</li>
          <li>Child 2</li>
          <li>
            Child 3
            <List as={args.as}>
              <li>Grandchild 1</li>
              <li>Grandchild 2</li>
              <li>Grandchild 3</li>
            </List>
          </li>
        </List>
      </li>
    </List>
  ),
  args: { children: null },
} satisfies Story;
