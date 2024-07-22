import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Header } from "./Header";

it("Renders <Header /> without crashing", () => {
  expect(
    render(
      <Header firstName="Firstname" lastName="Lastname" tagline="Tagline" />
    ).container.firstChild
  ).toMatchSnapshot();
});
