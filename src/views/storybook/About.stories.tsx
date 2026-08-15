import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import styles from "./storybook.module.scss";

const About = () => (
  <div className={styles["storybook-about"]}>
    <h1>About</h1>
    <p>
      Design system of{" "}
      <a
        href="https://www.johan-mouchet.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Johan Mouchet's
      </a>{" "}
      portfolio.
    </p>
    <p>
      Open-sourced on{" "}
      <a
        href="https://github.com/JohanMouchet/johan-mouchet.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
    <h2>Getting Started</h2>
    <ul>
      <li>
        Look into the <a href="?path=/story/styles-colors--settings">Styles</a>{" "}
        for an overview of the design settings, tools and utilities pulled from
        Sass.
      </li>
      <li>
        Look into the <a href="?path=/story/objects-button--example">Objects</a>
        , <a href="?path=/story/components-projects--example">Components</a>,{" "}
        <a href="?path=/story/partials-header--example">Partials</a> and{" "}
        <a href="?path=/story/layouts-default--example">Layouts</a> for an
        overview of the available components.
        <ul>
          <li>
            Use the <em>Docs</em> page for additional documentation
          </li>
          <li>
            Use the <em>Controls</em> tab to edit props dynamically
          </li>
          <li>
            Use the <em>Viewport</em> icon to display a story under a different
            breakpoint
          </li>
        </ul>
      </li>
    </ul>
    <h2>Learn More About Storybook</h2>
    <p>
      <a
        href="https://storybook.js.org/docs/basics/introduction/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentation
      </a>
    </p>
  </div>
);

const meta = {
  title: "About",
  component: About,
  parameters: {
    viewMode: "docs",
  },
  tags: ["!dev"],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page = {} satisfies Story;
