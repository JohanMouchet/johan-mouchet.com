import type { Meta, StoryObj } from "@storybook/react";
import { File } from "./File";

const meta = {
  title: "Objects/Form/File",
  component: File,
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    name: "name",
  },
} satisfies Story;
