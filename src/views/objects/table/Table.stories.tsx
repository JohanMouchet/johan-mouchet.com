import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta = {
  title: "Objects/Table",
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: (args) => (
    <Table {...args}>
      <thead>
        <tr>
          <th>Month</th>
          <th>In</th>
          <th>Out</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>January</td>
          <td>150</td>
          <td>50</td>
          <td>100</td>
        </tr>
        <tr>
          <td>February</td>
          <td>120</td>
          <td>
            40
            <br />
            20
          </td>
          <td>60</td>
        </tr>
        <tr>
          <td>March</td>
          <td>50</td>
          <td>30</td>
          <td>20</td>
        </tr>
        <tr>
          <td>April</td>
          <td>60</td>
          <td>10</td>
          <td>50</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Sum</td>
          <td>380</td>
          <td>150</td>
          <td>230</td>
        </tr>
      </tfoot>
    </Table>
  ),
  args: {
    children: null,
  },
} satisfies Story;
