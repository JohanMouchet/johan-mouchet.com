import clsx, { ClassValue } from "clsx";
import styles from "./Anchor.module.scss";

export const Anchor = ({
  id,
  marker = "#",
  children,
  className,
  ...props
}: {
  id: string;
  marker?: string;
  children?: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLSpanElement>) => {
  return !id ? null : (
    <span className={clsx(styles["o-anchor"], className)} {...props}>
      <a
        href={`#${id}`}
        id={id}
        className={styles["o-anchor__link"]}
        aria-label={`Permalink for ${children}`}
      >
        <span aria-hidden>{marker}</span>
      </a>
      {children}
    </span>
  );
};
