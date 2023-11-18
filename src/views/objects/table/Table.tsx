import React from "react";
import cx from "classnames";
import styles from "./Table.module.scss";

type Props = {
  align?: "top" | "bottom";
  equalColumns?: boolean;
  vertical?: boolean;
  variant?: "striped";
  hover?: boolean;
  size?:
    | "sm"
    | "sm-vertical"
    | "sm-horizontal"
    | "lg"
    | "lg-vertical"
    | "lg-horizontal";
  responsive?: boolean;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children: React.ReactNode;
};

const Table: React.FC<Props> = ({
  align,
  equalColumns,
  vertical,
  variant,
  hover,
  size,
  responsive,
  className,
  children,
  ...attributes
}) => {
  const classNames = cx(
    styles["o-table"],
    align && styles[`o-table--align-${align}`],
    equalColumns && styles["o-table--equal-columns"],
    vertical && styles["o-table--vertical"],
    variant && styles[`o-table--${variant}`],
    hover && !vertical && styles["o-table--hover"],
    size && styles[`o-table--${size}`],
    responsive && styles["o-table--responsive-@md"],
    className
  );

  return <table className={classNames}>{children}</table>;
};

export default Table;
