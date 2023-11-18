import { Element } from "@prismicio/react";
import type { Meta, StoryObj } from "@storybook/react";
import { OpenSource } from "./OpenSource";

const meta = {
  title: "Components/OpenSource",
  component: OpenSource,
} satisfies Meta<typeof OpenSource>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    projects: [
      {
        link: {
          url: "#",
        },
        name: "Name",
        lede: [
          {
            type: Element.paragraph,
            text: "Lede",
            spans: [],
          },
        ],
        description: [
          {
            type: Element.listItem,
            text: "Description",
            spans: [],
          },
        ],
      },
    ],
  },
} satisfies Story;
