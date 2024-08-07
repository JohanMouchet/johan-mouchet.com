import { Table } from "@/views/objects/table/Table";
import type { StoryObj } from "@storybook/react";
import {
  default as settings,
  default as styles,
} from "./typography.module.scss";

const meta = {
  title: "Styles/Typography",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Typefaces = {
  render: () => {
    const input = "The quick brown fox jumps over the lazy dog.";

    return (
      <Table size="lg-vertical">
        <thead>
          <tr>
            <th>Type</th>
            <th>Preview, Stack</th>
            <th>Sass Setting</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              name: "Sans-serif",
              stack: settings.TYPOGRAPHY_SANS,
              sassSetting: "$s-font-family-sans",
            },
            {
              name: "Serif",
              stack: settings.TYPOGRAPHY_SERIF,
              sassSetting: "$s-font-family-serif",
            },
            {
              name: "Display",
              stack: settings.TYPOGRAPHY_DISPLAY,
              sassSetting: "$s-font-family-display",
            },
            {
              name: "Monospace",
              stack: settings.TYPOGRAPHY_MONO,
              sassSetting: "$s-font-family-mono",
            },
          ].map((typeface) => (
            <tr key={typeface.stack}>
              <th>{typeface.name}</th>
              <td>
                <span
                  style={{ fontFamily: typeface.stack, fontSize: "1.375rem" }}
                >
                  {input}
                </span>
                <br />
                <span className="u-color--muted">{typeface.stack}</span>
              </td>
              <td>
                <code className="u-select--all">{typeface.sassSetting}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  },
} satisfies Story;

export const Sizes = {
  render: () => {
    const input = "The quick brown fox jumps over the lazy dog.";
    return (
      <>
        <h3>Settings</h3>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Sass Setting</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "Font size base",
                value: settings.FONT_SIZE_BASE,
                sassSetting: "$s-font-size-base",
              },
              {
                name: "Line height base",
                value: settings.LINE_HEIGHT_BASE,
                sassSetting: "$s-line-height-base",
              },
              {
                name: "Modular scale ratio",
                value: settings.MODULAR_SCALE_RATIO,
                sassSetting: "$s-modular-scale-ratio",
              },
            ].map((setting) => (
              <tr key={setting.sassSetting}>
                <th>{setting.name}</th>
                <td>
                  <code>{setting.value}</code>
                </td>
                <td>
                  <code className="u-select--all">{setting.sassSetting}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h3>Modular Scale</h3>
        <Table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Preview</th>
              <th>Sass Tool</th>
            </tr>
          </thead>
          <tbody>
            {[2, 1, 0, -1, -2].map((size) => (
              <tr key={size}>
                <th>{size}</th>
                <td>
                  <span
                    className={styles[`storybook-size--${size.toString()}`]}
                  >
                    {input}
                  </span>
                </td>
                <td>
                  <code className="u-select--all">t-modular-scale({size})</code>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  },
} satisfies Story;

export const Headings = {
  render: () => {
    const input = "Heading";
    return (
      <Table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Preview</th>
            <th>Sass Utility</th>
          </tr>
        </thead>
        <tbody>
          {["xl", "lg", 1, 2, 3, 4, 5, 6].map((level) => {
            const Tag =
              typeof level === "number"
                ? (`h${level}` as keyof JSX.IntrinsicElements)
                : `h1`;

            return (
              <tr key={level}>
                <th>{level}</th>
                <td>
                  <Tag className={`u-heading--${level} u-vr--bottom-0`}>
                    {input}
                  </Tag>
                </td>
                <td>
                  <code className="u-select--all">.u-heading--{level}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  },
} satisfies Story;

export const Formatting = {
  render: () => {
    const input = "";
    return (
      <Table>
        <thead>
          <tr>
            <th>Tag</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              tag: "<a>",
              preview: <a href="!#">{input || "Link text"}</a>,
            },
            {
              tag: "<strong>",
              preview: <strong>{input || "Strong text"}</strong>,
            },
            {
              tag: "<em>",
              preview: <em>{input || "Emphasized text"}</em>,
            },
            {
              tag: "<small>",
              preview: <small>{input || "Small text"}</small>,
            },
            {
              tag: "<sup>",
              preview: (
                <span>
                  Text <sup>{input || "Superscript"}</sup>
                </span>
              ),
            },
            {
              tag: "<sub>",
              preview: (
                <span>
                  Text <sub>{input || "Subscript"}</sub>
                </span>
              ),
            },
            {
              tag: "<code>",
              preview: <code>{input || "Code text"}</code>,
            },
            {
              tag: "<kbd>",
              preview: <kbd>{input || "Keyboard text"}</kbd>,
            },
            {
              tag: "<abbr>",
              preview: (
                <abbr title="Abbreviation">{input || "Abbreviation text"}</abbr>
              ),
            },
            {
              tag: "<mark>",
              preview: <mark>{input || "Marked text"}</mark>,
            },
            {
              tag: "<p>",
              preview: (
                <p className="u-vr--bottom-0">
                  {input || "The quick brown fox jumps over the lazy dog."}
                </p>
              ),
            },
            {
              tag: '[title="Title"]',
              preview: <span title={input || "Title"}>{input || "Title"}</span>,
            },
            {
              tag: "<hr>",
              preview: <hr style={{ marginTop: "0", marginBottom: "0" }} />,
            },
          ].map((tag) => (
            <tr key={tag.tag}>
              <td>
                <code className="u-select--all">{tag.tag}</code>
              </td>
              <td>{tag.preview}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  },
} satisfies Story;
