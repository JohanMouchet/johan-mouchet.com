import clsx, { ClassValue } from "clsx";
import styles from "./Badge.module.scss";

export const Badge = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: ClassValue;
} & React.HTMLProps<HTMLSpanElement>) => {
  return (
    <span className={clsx(styles["o-badge"], className)} {...props}>
      {children}
    </span>
  );
};
