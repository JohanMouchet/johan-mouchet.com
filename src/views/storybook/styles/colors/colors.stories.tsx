import { Table } from "@/views/objects/table/Table";
import type { StoryObj } from "@storybook/react";
import styles from "../../storybook.module.scss";
import settings from "./colors.module.scss";

const meta = {
  title: "Styles/Colors",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Settings = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Preview</th>
          <th>Color Code</th>
          <th>Sass Setting</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: "Primary Lighter",
            code: settings.COLOR_PRIMARY_LIGHTER,
            sassSetting: "$s-color-primary-lighter",
          },
          {
            name: "Primary",
            code: settings.COLOR_PRIMARY,
            sassSetting: "$s-color-primary",
          },
          {
            name: "Primary Darker",
            code: settings.COLOR_PRIMARY_DARKER,
            sassSetting: "$s-color-primary-darker",
          },
          {
            name: "Secondary Lighter",
            code: settings.COLOR_SECONDARY_LIGHTER,
            sassSetting: "$s-color-secondary-lighter",
          },
          {
            name: "Secondary",
            code: settings.COLOR_SECONDARY,
            sassSetting: "$s-color-secondary",
          },
          {
            name: "Secondary Darker",
            code: settings.COLOR_SECONDARY_DARKER,
            sassSetting: "$s-color-secondary-darker",
          },
          {
            name: "White",
            code: settings.COLOR_WHITE,
            sassSetting: "$s-color-white",
          },
          {
            name: "Gray 50",
            code: settings.COLOR_GRAY_50,
            sassSetting: "$s-color-gray-50",
          },
          {
            name: "Gray 100",
            code: settings.COLOR_GRAY_100,
            sassSetting: "$s-color-gray-100",
          },
          {
            name: "Gray 200",
            code: settings.COLOR_GRAY_200,
            sassSetting: "$s-color-gray-200",
          },
          {
            name: "Gray 300",
            code: settings.COLOR_GRAY_300,
            sassSetting: "$s-color-gray-300",
          },
          {
            name: "Gray 400",
            code: settings.COLOR_GRAY_400,
            sassSetting: "$s-color-gray-400",
          },
          {
            name: "Gray 500",
            code: settings.COLOR_GRAY_500,
            sassSetting: "$s-color-gray-500",
          },
          {
            name: "Gray 600",
            code: settings.COLOR_GRAY_600,
            sassSetting: "$s-color-gray-600",
          },
          {
            name: "Gray 700",
            code: settings.COLOR_GRAY_700,
            sassSetting: "$s-color-gray-700",
          },
          {
            name: "Gray 800",
            code: settings.COLOR_GRAY_800,
            sassSetting: "$s-color-gray-800",
          },
          {
            name: "Gray 900",
            code: settings.COLOR_GRAY_900,
            sassSetting: "$s-color-gray-900",
          },
          {
            name: "Gray 950",
            code: settings.COLOR_GRAY_950,
            sassSetting: "$s-color-gray-950",
          },
          {
            name: "Black",
            code: settings.COLOR_BLACK,
            sassSetting: "$s-color-black",
          },
          {
            name: "Success",
            code: settings.COLOR_SUCCESS,
            sassSetting: "$s-color-success",
          },
          {
            name: "Info",
            code: settings.COLOR_INFO,
            sassSetting: "$s-color-info",
          },
          {
            name: "Warning",
            code: settings.COLOR_WARNING,
            sassSetting: "$s-color-warning",
          },
          {
            name: "Danger",
            code: settings.COLOR_DANGER,
            sassSetting: "$s-color-danger",
          },
        ].map((color) => (
          <tr key={color.code}>
            <th>{color.name}</th>
            <td>
              <span
                className={styles["storybook-swatch"]}
                style={{ backgroundColor: color.code }}
              />
            </td>
            <td>{color.code}</td>
            <td>
              <code className="u-select--all">{color.sassSetting}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ),
} satisfies Story;

export const Text = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th>Preview</th>
          <th>Sass Utility</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className="u-color--dimmed">Dimmed text</span>
          </td>
          <td>
            <code className="u-select--all">.u-color--dimmed</code>
          </td>
        </tr>
        <tr>
          <td>
            <span className="u-color--success">Success text</span>
          </td>
          <td>
            <code className="u-select--all">.u-color--success</code>
          </td>
        </tr>
        <tr>
          <td>
            <span className="u-color--info">Info text</span>
          </td>
          <td>
            <code className="u-select--all">.u-color--info</code>
          </td>
        </tr>
        <tr>
          <td>
            <span className="u-color--warning">Warning text</span>
          </td>
          <td>
            <code className="u-select--all">.u-color--warning</code>
          </td>
        </tr>
        <tr>
          <td>
            <span className="u-color--danger">Danger text</span>
          </td>
          <td>
            <code className="u-select--all">.u-color--danger</code>
          </td>
        </tr>
      </tbody>
    </Table>
  ),
} satisfies Story;
