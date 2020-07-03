import * as React from "react";
import cx from "classnames";
import "./Figure.scss";

type Props = {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  centered?: boolean;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
};

const Figure = ({
  src,
  alt,
  title,
  caption,
  centered,
  className,
  ...attributes
}: Props) => {
  const classNames = cx(
    "o-figure",
    centered && `o-figure--centered`,
    className
  );

  return (
    <figure className={classNames}>
      <img
        className="o-figure__img"
        src={src}
        alt={alt || caption}
        title={title}
        loading="lazy"
        {...attributes}
      />
      {caption && (
        <figcaption className="o-figure__caption">{caption}</figcaption>
      )}
    </figure>
  );
};

export default Figure;
