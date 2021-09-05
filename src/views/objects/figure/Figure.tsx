import React from "react";
import cx from "classnames";
import styles from "./Figure.module.scss";

type Props = {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  centered?: boolean;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
};

const Figure: React.FC<Props> = ({
  src,
  alt,
  title,
  caption,
  centered,
  className,
  ...attributes
}) => {
  const classNames = cx(
    styles["o-figure"],
    centered && styles["o-figure--centered"],
    className
  );

  return (
    <figure className={classNames}>
      <img
        className={styles["o-figure__img"]}
        src={src}
        alt={alt || caption}
        title={title}
        loading="lazy"
        {...attributes}
      />
      {caption && (
        <figcaption className={styles["o-figure__caption"]}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
