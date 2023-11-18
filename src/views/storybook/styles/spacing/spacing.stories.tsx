import { Table } from "@/views/objects/table/Table";
import type { StoryObj } from "@storybook/react";
import clsx from "clsx";
import styles from "./spacing.module.scss";

const meta = {
  title: "Styles/Spacing",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th>Size</th>
          <th>Preview</th>
          <th>Sass Tool</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5, 6].map((spacing) => (
          <tr key={spacing}>
            <th>{spacing}</th>
            <td>
              <div
                className={clsx(
                  styles["storybook-spacing"],
                  styles[`storybook-spacing--${spacing.toString()}`]
                )}
              />
            </td>
            <td>
              <code className="u-select--all">t-modular-scale({spacing})</code>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
} satisfies Story;
