// @flow

import * as React from "react";
import cx from "classnames";
import { IconArrowReturn } from "views/objects";
import "./Footnotes.scss";

type ReferenceProps = {
  id: string,
  prefix?: string,
  text: string,
  label?: string,
};

const FootnotesReference = ({
  id,
  prefix = "",
  text,
  label = "See note",
}: ReferenceProps) => (
  <sup>
    <a
      id={`footnote-ref:${prefix && prefix + "-"}${id}`}
      className="o-footnote-ref"
      href={`#footnote:${prefix && prefix + "-"}${id}`}
      aria-label={label}
    >
      {text}
    </a>
  </sup>
);

export { FootnotesReference };

type NotesProps = {
  notes: [
    {
      id: string,
      prefix?: string,
      text: string,
      label?: string,
      url?: string,
    }
  ],
  className?: string | Array<string> | Object,
};

const FootnotesNotes = ({ notes, className }: NotesProps) => {
  const classNames = cx("o-footnotes", className);

  return !notes ? null : (
    <ol className={classNames}>
      {notes.map((note) => (
        <li
          id={`footnote:${note.prefix ? note.prefix + "-" : ""}${note.id}`}
          className="o-footnotes__note"
          key={note.id}
        >
          {note.text}{" "}
          <a
            href={`#footnote-ref:${note.prefix ? note.prefix + "-" : ""}${
              note.id
            }`}
            className="o-footnotes__backref"
            aria-label={note.label || "Jump back to reference"}
          >
            <IconArrowReturn />
          </a>
        </li>
      ))}
    </ol>
  );
};

export { FootnotesNotes };
