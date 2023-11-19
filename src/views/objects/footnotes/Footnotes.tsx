import { IconArrowReturn } from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import styles from "./Footnotes.module.scss";

export const FootnotesReference = ({
  id,
  text,
  label = "See note",
  className,
  ...props
}: {
  id: string;
  text: string;
  label?: string;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLAnchorElement>, "label">) => (
  <sup>
    <a
      id={`footnote-ref:${id}`}
      className={clsx(styles["o-footnote-ref"], className)}
      href={`#footnote:${id}`}
      aria-label={label}
      {...props}
    >
      {text}
    </a>
  </sup>
);

export const FootnotesNotes = ({
  notes,
  className,
  ...props
}: {
  notes: Array<{
    id: string;
    text: string;
    label?: string;
  }>;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLOListElement>, "type">) => {
  if (!notes?.length) {
    return null;
  }

  return (
    <ol className={clsx(styles["o-footnotes"], className)} {...props}>
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
