import type { Meta, StoryObj } from "@storybook/react";
import { SocialMedia } from "./SocialMedia";

const meta = {
  title: "Components/SocialMedia",
  component: SocialMedia,
} satisfies Meta<typeof SocialMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    media: [
      {
        name: "Name",
        link: {
          url: "#",
        },
        icon: "500px",
      },
    ],
  },
} satisfies Story;
