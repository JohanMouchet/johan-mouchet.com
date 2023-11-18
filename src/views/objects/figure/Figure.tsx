import clsx, { ClassValue } from "clsx";
import styles from "./Figure.module.scss";

export const Figure = ({
  src,
  alt,
  title,
  caption,
  centered,
  className,
  ...props
}: {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  centered?: boolean;
  className?: ClassValue;
} & React.HTMLProps<HTMLImageElement>) => {
  const classNames = clsx(
    styles["o-figure"],
    centered && styles["o-figure--centered"],
    className
  );

  return (
    <figure className={classNames}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles["o-figure__img"]}
        src={src}
        alt={alt || caption}
        title={title}
        loading="lazy"
        {...props}
      />
      {caption && (
        <figcaption className={styles["o-figure__caption"]}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
