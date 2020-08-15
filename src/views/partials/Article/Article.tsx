import React from "react";
import cx from "classnames";
import "./Article.scss";

type Props = {
  size?: "sm" | "lg";
  margin?: "no-margin" | "no-top-margin" | "no-bottom-margin";
  variant?: "secondary";
  className?: string | string[] | { [key: string]: boolean };
  children: React.ReactNode;
};

const Article: React.FC<Props> = ({
  size,
  margin,
  variant,
  className,
  children,
}) => {
  const classNames = cx(
    "p-article",
    size && `p-article--${size}`,
    margin && `p-article--${margin}`,
    variant && `p-article--${variant}`,
    variant && size && `p-article--${variant}-${size}`,
    className
  );

  return <article className={classNames}>{children}</article>;
};

export default Article;
