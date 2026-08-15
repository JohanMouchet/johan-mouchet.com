import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Textarea } from "./Fields";

const meta = {
  title: "Objects/Form/Fields/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { name: "name" },
} satisfies Story;
