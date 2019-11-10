import React from "react";
import { shallow } from "enzyme";
import Table from ".";

it("Renders <Table /> without crashing", () => {
  shallow(<Table />);
});
