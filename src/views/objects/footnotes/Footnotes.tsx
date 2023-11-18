import React from "react";
import cx from "classnames";
import { IconArrowReturn } from "views/objects";
import styles from "./Footnotes.module.scss";

type ReferenceProps = {
  id: string;
  text: string;
  label?: string;
};

const FootnotesReference: React.FC<ReferenceProps> = ({
  id,
  text,
  label = "See note",
}) => (
  <sup>
    <a
      id={`footnote-ref:${id}`}
      className={styles["o-footnote-ref"]}
      href={`#footnote:${id}`}
      aria-label={label}
    >
      {text}
    </a>
  </sup>
);

export { FootnotesReference };

type NotesProps = {
  notes: Array<{
    id: string;
    text: string;
    label?: string;
  }>;
  className?: string | string[] | { [key: string]: boolean };
};

const FootnotesNotes: React.FC<NotesProps> = ({ notes, className }) => {
  const classNames = cx(styles["o-footnotes"], className);

  return !notes?.length ? null : (
    <ol className={classNames}>
      {notes.map((note) => (
        <li
          id={`footnote:${note.id}`}
          className={styles["o-footnotes__note"]}
          key={note.id}
        >
          {note.text}{" "}
          <a
            href={`#footnote-ref:${note.id}`}
            className={styles["o-footnotes__backref"]}
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
