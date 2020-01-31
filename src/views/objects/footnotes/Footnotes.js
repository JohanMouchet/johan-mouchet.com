// @flow

import * as React from "react";
import cx from "classnames";
import "./Footnotes.scss";

type ReferenceProps = {
  id: string,
  prefix?: string,
  text: string
};

const FootnotesReference = ({ id, prefix, text }: ReferenceProps) => (
  <sup>
    <a
      id={`footnote-ref:${prefix && prefix + "-"}${id}`}
      className="o-footnote-ref"
      href={`#footnote:${prefix && prefix + "-"}${id}`}
    >
      {text}
    </a>
  </sup>
);

FootnotesReference.defaultProps = {
  prefix: ""
};

export { FootnotesReference };

type NotesProps = {
  notes: [
    {
      id: string,
      prefix?: string,
      text: string,
      url?: string
    }
  ],
  className?: string | Array<string> | Object
};

const FootnotesNotes = ({ notes, className }: NotesProps) => {
  const classNames = cx("o-footnotes", className);

  return (
    <ol className={classNames}>
      {notes.map(note => (
        <li
          id={`footnote:${note.prefix ? note.prefix + "-" : ""}${note.id}`}
          className="o-footnotes__note"
          key={note.id}
        >
          {note.text}
          <a
            href={`#footnote-ref:${note.prefix ? note.prefix + "-" : ""}${
              note.id
            }`}
            className="o-footnotes__backref"
          >
            &#x21a9;
          </a>
        </li>
      ))}
    </ol>
  );
};

FootnotesNotes.defaultProps = {
  notes: []
};

export { FootnotesNotes };
