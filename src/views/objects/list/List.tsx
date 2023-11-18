import clsx, { ClassValue } from "clsx";
import styles from "./List.module.scss";

export const List = ({
  as = "ul",
  unstyled,
  inline,
  striped,
  size,
  linkBlock,
  children,
  className,
  ...props
}: {
  as?: "ul" | "ol";
  unstyled?: boolean;
  inline?: boolean;
  striped?: "horizontal" | "vertical";
  size?: "lg";
  linkBlock?: boolean;
  children: React.ReactNode;
  className?: ClassValue;
}) => {
  const classNames = clsx(
    styles["o-list"],
    unstyled && styles[`o-list--unstyled`],
    inline && styles[`o-list--inline`],
    striped &&
      `${styles[`o-list--${striped === "horizontal" ? "h" : "v"}-striped`]} ${
        styles["o-list--unstyled"]
      }`,
    size && styles[`o-list--${size}`],
    linkBlock && styles[`o-list--link-block`],
    className
  );

  const Tag = as;

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
};
