import type { StoryObj } from "@storybook/react";
const meta = {
  title: "Styles/Grid",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: () => (
    <p>
      <a href="https://www.npmjs.com/package/fluxgrid">Fluxgrid</a>, responsive
      and customisable utility-based CSS grid built with Sass.
    </p>
  ),
} satisfies Story;
