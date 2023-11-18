import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Objects/ProgressBar",
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    label: "Label",
    progress: "Progress",
    progressPct: true,
    total: "Total",
    detailsOnHover: true,
    filling: 50,
  },
} satisfies Story;
