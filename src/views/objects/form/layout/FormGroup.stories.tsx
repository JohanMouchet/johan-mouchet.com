import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormGroup } from "./Layout";

const meta = {
  title: "Objects/Form/Layout/FormGroup",
  component: FormGroup,
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { children: "Children", detail: "Detail" },
} satisfies Story;
