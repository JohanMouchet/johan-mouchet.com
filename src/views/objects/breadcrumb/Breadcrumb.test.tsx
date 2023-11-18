import { render } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";

it("Renders <Breadcrumb /> without crashing", () => {
  expect(
    render(
      <Breadcrumb
        levels={[
          {
            title: "Title",
            link: {
              url: "#",
            },
          },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
