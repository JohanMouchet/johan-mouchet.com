import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta = {
  title: "Partials/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    version: "Version",
    copyright: "Copyright",
    topButtonLabel: "TopButtonLabel",
  },
} satisfies Story;
