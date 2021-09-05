import React from "react";
import cx from "classnames";
import styles from "./Article.module.scss";

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
    styles["p-article"],
    size && styles[`p-article--${size}`],
    margin && styles[`p-article--${margin}`],
    variant && styles[`p-article--${variant}`],
    variant && size && styles[`p-article--${variant}-${size}`],
    className
  );

  return <article className={classNames}>{children}</article>;
};

export default Article;
