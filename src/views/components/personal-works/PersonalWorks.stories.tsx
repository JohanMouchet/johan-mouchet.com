import type { Meta, StoryObj } from "@storybook/react";
import { PersonalWorks } from "./PersonalWorks";

const meta = {
  title: "Components/PersonalWorks",
  component: PersonalWorks,
} satisfies Meta<typeof PersonalWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    works: [
      {
        link: {
          url: "#",
        },
        thumbnailSrc: {
          url: "https://via.placeholder.com/200x200",
        },
        thumbnailExternalSrc: {
          url: "https://via.placeholder.com/200x200",
        },
        icon: "unsplash",
      },
    ],
  },
} satisfies Story;
