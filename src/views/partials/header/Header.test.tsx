import { render } from "@testing-library/react";
import { Header } from "./Header";

it("Renders <Header /> without crashing", () => {
  expect(
    render(
      <Header firstName="Firstname" lastName="Lastname" tagline="Tagline" />
    ).container.firstChild
  ).toMatchSnapshot();
});
