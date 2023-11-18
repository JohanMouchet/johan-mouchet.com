import { Table } from "@/views/objects/table/Table";
import type { StoryObj } from "@storybook/react";
import clsx from "clsx";
import styles from "../../storybook.module.scss";
import settings from "./shadows.module.scss";

const meta = {
  title: "Styles/Shadows",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Preview</th>
          <th>Sass Setting</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: "sm",
            source: settings.SHADOWS_SM,
          },
          {
            name: "md",
            source: settings.SHADOWS_MD,
          },
          {
            name: "lg",
            source: settings.SHADOWS_LG,
          },
        ].map((shadow) => (
          <tr key={shadow.source}>
            <th>{shadow.name}</th>
            <td>
              <span
                className={clsx(
                  styles["storybook-swatch"],
                  styles["storybook-swatch--lg"]
                )}
                style={{ boxShadow: shadow.source }}
              />
            </td>
            <td>
              <code className="u-select--all">
                map.get($s-shadows, {shadow.name})
              </code>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
} satisfies Story;
