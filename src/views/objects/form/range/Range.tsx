import clsx, { ClassValue } from "clsx";
import styles from "./Range.module.scss";

export const Range = ({
  id,
  name,
  className,
  ...props
}: {
  id?: string;
  name: string;
  className?: ClassValue;
} & React.HTMLProps<HTMLInputElement>) => {
  return (
    <input
      id={id}
      type="range"
      name={name}
      className={clsx(styles["o-form__range"], className)}
      {...props}
    />
  );
};
