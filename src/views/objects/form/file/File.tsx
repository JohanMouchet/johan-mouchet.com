import { IconCloudUpload } from "@/views/objects/icons";
import clsx, { ClassValue } from "clsx";
import buttonStyles from "../../button/Button.module.scss";
import styles from "./File.module.scss";

export const File = ({
  id,
  name,
  multipleCaption,
  children = "Upload",
  className,
  ...props
}: {
  id?: string;
  name: string;
  multipleCaption?: string;
  children?: React.ReactNode;
  className?: ClassValue;
} & Omit<React.HTMLProps<HTMLInputElement>, "label">) => {
  const classNames = clsx(
    styles["o-form__file"],
    buttonStyles["o-button"],
    className
  );

  return (
    <label className={classNames}>
      <input
        id={id}
        type="file"
        name={name}
        className={clsx(styles["o-form__file-input"], "u-is-visually-hidden")}
        data-multiple-caption={
          multipleCaption ? multipleCaption : "{count} files selected"
        }
        {...props}
      />
      <span className={styles["o-form__file-icon"]}>
        <IconCloudUpload />
      </span>
      {children && (
        <span className={styles["o-form__file-text"]}>{children}</span>
      )}
    </label>
  );
};
