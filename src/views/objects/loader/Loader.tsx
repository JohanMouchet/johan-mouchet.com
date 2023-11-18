import clsx, { ClassValue } from "clsx";
import styles from "./Loader.module.scss";

export const Loader = ({
  size,
  className,
  ...props
}: {
  size?: "sm";
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLDivElement>, "size">) => {
  const classNames = clsx(
    styles["o-loader"],
    size && styles[`o-loader--${size}`],
    className
  );

  return <div className={classNames} {...props} />;
};
