import { Table } from "@/views/objects/table/Table";
import type { StoryObj } from "@storybook/react";
import clsx from "clsx";
import styles from "../../storybook.module.scss";
import settings from "./backgrounds.module.scss";

const meta = {
  title: "Styles/Backgrounds",
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
            name: "Dots",
            source: settings.BACKGROUNDS_DOTS,
            sassSetting: "dots",
          },
          {
            name: "Zigzag",
            source: settings.BACKGROUNDS_ZIGZAG,
            sassSetting: "zigzag",
          },
        ].map((background) => (
          <tr key={background.source}>
            <th>{background.name}</th>
            <td>
              <span
                className={clsx(
                  styles["storybook-swatch"],
                  styles["storybook-swatch--lg"]
                )}
                style={{ backgroundImage: background.source }}
              />
            </td>
            <td>
              <code className="u-select--all">
                map.get($s-backgrounds, {background.sassSetting})
              </code>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
} satisfies Story;
