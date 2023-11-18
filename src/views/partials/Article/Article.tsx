import clsx, { ClassValue } from "clsx";
import styles from "./Article.module.scss";

export const Article = ({
  size,
  margin,
  variant,
  children,
  className,
  ...props
}: {
  size?: "sm" | "lg";
  margin?: "no-margin" | "no-top-margin" | "no-bottom-margin";
  variant?: "secondary";
  children: React.ReactNode;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLDivElement>, "size">) => {
  const classNames = clsx(
    styles["p-article"],
    size && styles[`p-article--${size}`],
    margin && styles[`p-article--${margin}`],
    variant && styles[`p-article--${variant}`],
    variant && size && styles[`p-article--${variant}-${size}`],
    className
  );

  return (
    <article className={classNames} {...props}>
      {children}
    </article>
  );
};
