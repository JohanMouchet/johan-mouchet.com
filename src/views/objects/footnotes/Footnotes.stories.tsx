import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";
import { FootnotesNotes, FootnotesReference } from "./Footnotes";

const meta = {
  title: "Objects/Footnotes",
  component: FootnotesReference,
} satisfies Meta<typeof FootnotesReference>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example = {
  render: (args) => (
    <Fragment>
      <p>
        Reference
        <FootnotesReference {...args} />
      </p>
      <FootnotesNotes
        notes={[
          {
            id: args.id,
            text: "Text",
          },
        ]}
      />
    </Fragment>
  ),
  args: {
    id: "1",
    text: "1",
  },
} satisfies Story;
