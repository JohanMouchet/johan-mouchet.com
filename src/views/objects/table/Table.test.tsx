import React from "react";
import { shallow } from "enzyme";
import Table from ".";

it("Renders <Table /> without crashing", () => {
  expect(
    shallow(
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
    )
  ).toMatchSnapshot();
});
