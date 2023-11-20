import clsx, { ClassValue } from "clsx";
import styles from "./Table.module.scss";

export const Table = ({
  align,
  equalColumns,
  vertical,
  variant,
  hover,
  size,
  responsive,
  children,
  className,
  ...props
}: {
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
  children: React.ReactNode;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLTableElement>, "size">) => {
  const classNames = clsx(
    styles["o-table"],
    align && styles[`o-table--align-${align}`],
    equalColumns && styles["o-table--equal-columns"],
    vertical && styles["o-table--vertical"],
    variant && styles[`o-table--${variant}`],
    hover && !vertical && styles["o-table--hover"],
    size && styles[`o-table--${size}`],
    responsive && styles["md:o-table--responsive"],
    className
  );

  return (
    <table className={classNames} {...props}>
      {children}
    </table>
  );
};
