import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Loader } from "./Loader";

const meta = {
  title: "Objects/Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {},
} satisfies Story;
