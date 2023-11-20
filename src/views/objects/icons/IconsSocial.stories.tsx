import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";
import {
  Icon500px,
  IconCodepen,
  IconDribbble,
  IconGithub,
  IconInstagram,
  IconLinkedIn,
  IconSpotify,
  IconUnsplash,
  IconXCom,
  IconYoutube,
} from ".";
import styles from "./IconsStories.module.scss";

const meta = {
  title: "Objects/Icons/Social",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: () => {
    return (
      <div className="grid u-align--center grid-no-gutter">
        {[
          Icon500px,
          IconCodepen,
          IconDribbble,
          IconGithub,
          IconInstagram,
          IconLinkedIn,
          IconSpotify,
          IconXCom,
          IconUnsplash,
          IconYoutube,
        ].map((Icon, index) => (
          <div className={clsx("cell", styles["storybook-icon"])} key={index}>
            <Icon />
          </div>
        ))}
      </div>
    );
  },
} satisfies Story;
