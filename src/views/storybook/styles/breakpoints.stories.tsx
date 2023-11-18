import settings from "@/constants/breakpoints/breakpoints.module.scss";
import { Table } from "@/views/objects/table/Table";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "Styles/Breakpoints",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Size</th>
          <th>Sass Setting</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: "xs",
            size: settings.BREAKPOINTS_XS,
          },
          {
            name: "sm",
            size: settings.BREAKPOINTS_SM,
          },
          {
            name: "md",
            size: settings.BREAKPOINTS_MD,
          },
          {
            name: "lg",
            size: settings.BREAKPOINTS_LG,
          },
          {
            name: "xl",
            size: settings.BREAKPOINTS_XL,
          },
        ].map((breakpoint) => (
          <tr key={breakpoint.size}>
            <th>{breakpoint.name}</th>
            <td>{breakpoint.size}</td>
            <td>
              <code className="u-select--all">
                map.get($s-breakpoints, {breakpoint.name})
              </code>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
} satisfies Story;
