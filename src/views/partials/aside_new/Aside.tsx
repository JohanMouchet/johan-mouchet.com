import clsx, { ClassValue } from "clsx";
import styles from "./Aside.module.scss";

export const Aside = ({
  margin,
  children,
  className,
  ...props
}: {
  margin?: "no-margin";
  children: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  const classNames = clsx(
    styles["p-aside"],
    margin && styles[`p-main--${margin}`],
    className
  );

  return (
    <aside className={classNames} {...props}>
      {children}
    </aside>
  );
};
