import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Carousel } from "./Carousel";

it.skip("Renders <Carousel /> without crashing", () => {
  expect(
    render(
      <Carousel
        close={() => {}}
        slides={[
          { id: "1", content: <div>Slide 1</div> },
          { id: "2", content: <div>Slide 2</div> },
          { id: "3", content: <div>Slide 3</div> },
        ]}
      />
    ).container.firstChild
  ).toMatchSnapshot();
});
