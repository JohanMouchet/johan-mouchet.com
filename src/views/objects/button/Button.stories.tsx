import type { Meta, StoryObj } from "@storybook/react";
import { IconEnvelope } from "../icons";
import { Button } from "./Button";

const meta = {
  title: "Objects/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: { type: "button", children: "Children" },
} satisfies Story;

export const WithIcon = {
  args: { type: "button", children: "With icon", icon: <IconEnvelope /> },
} satisfies Story;
