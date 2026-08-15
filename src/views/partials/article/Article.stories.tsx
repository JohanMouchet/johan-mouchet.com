import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Article } from "./Article";

const meta = {
  title: "Partials/Article",
  component: Article,
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    children: "Article",
  },
} satisfies Story;
