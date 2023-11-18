import { render } from "@testing-library/react";
import { Card } from "./Card";

it("Renders <Card /> without crashing", () => {
  expect(
    render(
      <Card
        bannerUrl="https://via.placeholder.com/400x168"
        bannerGradient
        header="Header"
        footer="Footer"
        variant="secondary"
        size="sm"
      >
        children
      </Card>
    ).container.firstChild
  ).toMatchSnapshot();
});
