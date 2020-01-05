import React from "react";
import { shallow } from "enzyme";
import Layout from ".";

it("Renders <Layout /> without crashing", () => {
  shallow(<Layout />);
});
