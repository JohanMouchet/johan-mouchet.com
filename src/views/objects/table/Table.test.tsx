import { render } from "@testing-library/react";
import { Table } from "./Table";

it("Renders <Table /> without crashing", () => {
  expect(
    render(
      <Table
        align="top"
        equalColumns={false}
        vertical={false}
        variant="striped"
        hover={false}
        size="sm"
        responsive={false}
      >
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Footer</td>
          </tr>
        </tfoot>
      </Table>
    ).container.firstChild
  ).toMatchSnapshot();
});
