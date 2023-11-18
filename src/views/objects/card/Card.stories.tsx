import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Objects/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    bannerUrl: "https://via.placeholder.com/400x168",
    bannerGradient: true,
    header: "Header",
    footer: "Footer",
    children: "Children",
  },
} satisfies Story;
