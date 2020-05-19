import React from "react";
import { shallow } from "enzyme";
import { Button, ButtonSocial, ButtonSocialBadge } from ".";

it("Renders <Button /> without crashing", () => {
  expect(shallow(<Button />)).toMatchSnapshot();
});

it("Renders <ButtonSocial /> without crashing", () => {
  expect(shallow(<ButtonSocial />)).toMatchSnapshot();
});

it("Renders <ButtonSocialBadge /> without crashing", () => {
  expect(shallow(<ButtonSocialBadge />)).toMatchSnapshot();
});
