import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta = {
  title: "Objects/Breadcrumb",
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    levels: [
      {
        title: "Level 1",
        link: {
          url: "Level 1",
        },
      },
      {
        title: "Level 2",
        link: {
          url: "Level 2",
        },
      },
    ],
  },
} satisfies Story;
