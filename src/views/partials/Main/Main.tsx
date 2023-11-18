import clsx, { ClassValue } from "clsx";
import styles from "./Main.module.scss";

export const Main = ({
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
    styles["p-main"],
    margin && styles[`p-main--${margin}`],
    className
  );

  return (
    <main className={classNames} {...props}>
      {children}
    </main>
  );
};
