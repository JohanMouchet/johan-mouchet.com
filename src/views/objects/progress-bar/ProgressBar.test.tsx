import { render } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";

it("Renders <ProgressBar /> without crashing", () => {
  expect(
    render(
      <ProgressBar
        label="Label"
        progress="Progress"
        progressPct={false}
        total="Total"
        detailsOnHover
        filling={50}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
