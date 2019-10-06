// @flow

import * as React from "react";
import cx from "classnames";
import "./footnotes.scss";

type ReferenceProps = {
  id: string,
  prefix: ?string,
  text: string,
  url: ?string
};

const FootnotesReference = (props: ReferenceProps) => {
  const { id, prefix, text, url } = props;

  return (
    <sup>
      <a
        id={`footnote-ref:${prefix && prefix + "-"}${id}`}
        className="o-footnote-ref"
        href={`${url}#footnote:${prefix && prefix + "-"}${id}`}
      >
        {text}
      </a>
    </sup>
  );
};

FootnotesReference.defaultProps = {
  url: ""
};

export { FootnotesReference };

type NotesProps = {
  notes: [
    {
      id: string,
      prefix: ?string,
      text: string,
      url: ?string
    }
  ],
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>
  }
};

const FootnotesNotes = (props: NotesProps) => {
  const { notes, metadata } = props;

  const NotesClass = cx(
    "o-footnotes",
    metadata.contextClass,
    metadata.additionalClasses
  );

  return (
    <ol className={NotesClass}>
      {notes.map(note => (
        <li
          id={`footnote:${note.prefix && note.prefix + "-"}${note.id}`}
          className="o-footnotes__note"
        >
          {note.text}
          <a
            href={`${note.url}#footnote-ref:${note.prefix &&
              note.prefix + "-"}${note.id}`}
            className="footnote-backref"
          >
            &#x21a9;
          </a>
        </li>
      ))}
    </ol>
  );
};

FootnotesNotes.defaultProps = {
  url: ""
};

export { FootnotesNotes };
