import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

const meta = {
  title: "Objects/Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    menu: [
      {
        text: "Item 1",
        url: "Item 1",
      },
      {
        text: "Item 2",
        menu: [
          {
            text: "Item 2 - Submenu 1",
            url: "#",
          },
          {
            text: "Item 2 - Submenu 2",
            url: "#",
          },
        ],
      },
      {
        text: "Item 3",
        url: "#",
      },
    ],
  },
} satisfies Story;
