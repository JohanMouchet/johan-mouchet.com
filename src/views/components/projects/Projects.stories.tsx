import { Element } from "@prismicio/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Projects } from "./Projects";

const meta = {
  title: "Components/Projects",
  component: Projects,
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    projects: [
      {
        highlight: true,
        name: "Name",
        tagline: "Tagline",
        link: {
          url: "#",
        },
        lede: [
          {
            type: Element.paragraph,
            text: "Lede",
            spans: [],
          },
        ],
        thumbnailSrc: {
          url: "https://via.placeholder.com/400x225",
        },
        achievements: [
          {
            type: Element.listItem,
            text: "Achievement",
            spans: [],
          },
        ],
        architecture: [
          {
            type: Element.paragraph,
            text: "Architecture 1, Architecture 2, Architecture 3",
            spans: [],
          },
        ],
      },
    ],
  },
} satisfies Story;
