import React from "react";
import { shallow } from "enzyme";
import { Button, ButtonSocial, ButtonSocialBadge } from ".";

it("Renders <Button /> without crashing", () => {
  shallow(<Button />);
});

it("Renders <ButtonSocial /> without crashing", () => {
  shallow(<ButtonSocial />);
});

it("Renders <ButtonSocialBadge /> without crashing", () => {
  shallow(<ButtonSocialBadge />);
});
