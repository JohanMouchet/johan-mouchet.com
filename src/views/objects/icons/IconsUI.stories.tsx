import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";
import {
  IconArrowLineLeft,
  IconArrowReturn,
  IconArrowRight,
  IconArrowUpRight,
  IconBookmark,
  IconCheckCircle,
  IconChevronDown,
  IconCloudUpload,
  IconDownload,
  IconEnvelope,
  IconExclamationCircle,
  IconExclamationTriangle,
  IconInfoCircle,
  IconMinus,
  IconPhone,
  IconPlus,
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
          IconArrowLineLeft,
          IconArrowReturn,
          IconArrowRight,
          IconArrowUpRight,
          IconBookmark,
          IconCheckCircle,
          IconChevronDown,
          IconCloudUpload,
          IconDownload,
          IconEnvelope,
          IconExclamationCircle,
          IconExclamationTriangle,
          IconInfoCircle,
          IconMinus,
          IconPhone,
          IconPlus,
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
