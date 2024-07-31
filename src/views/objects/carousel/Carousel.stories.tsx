import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta = {
  title: "Objects/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  args: {
    close: () => {},
    slides: [
      { id: "1", content: <div>Slide 1</div> },
      { id: "2", content: <div>Slide 2</div> },
      { id: "3", content: <div>Slide 3</div> },
    ],
  },
} satisfies Story;
