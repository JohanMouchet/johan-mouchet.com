import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";
import {
  IconArrowReturn,
  IconBookmark,
  IconCheckCircle,
  IconChevronDown,
  IconCloudUpload,
  IconExclamationCircle,
  IconExclamationTriangle,
  IconInfoCircle,
  IconSearch,
  IconX,
} from ".";
import styles from "./IconsStories.module.scss";

const meta = {
  title: "Objects/Icons/UI",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: () => {
    return (
      <div className="grid u-align--center grid-no-gutter">
        {[
          IconArrowReturn,
          IconBookmark,
          IconCheckCircle,
          IconChevronDown,
          IconCloudUpload,
          IconExclamationCircle,
          IconExclamationTriangle,
          IconInfoCircle,
          IconSearch,
          IconX,
        ].map((Icon, index) => (
          <div className={clsx("cell", styles["storybook-icon"])} key={index}>
            <Icon />
          </div>
        ))}
      </div>
    );
  },
} satisfies Story;
