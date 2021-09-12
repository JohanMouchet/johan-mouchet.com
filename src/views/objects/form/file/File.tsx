import React from "react";
import cx from "classnames";
import { IconCloudUpload } from "views/objects";
import buttonStyles from "../../button/Button.module.scss";
import styles from "./File.module.scss";

type Props = {
  id?: string;
  name: string;
  multipleCaption?: string;
  label?: string;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
  children?: React.ReactNode;
};

const File: React.FC<Props> = ({
  id,
  name,
  multipleCaption,
  label = "Upload",
  className,
  children,
  ...attributes
}) => {
  const classNames = cx(
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
        className="o-form__file-input u-is-visually-hidden"
        data-multiple-caption={
          multipleCaption ? multipleCaption : "{count} files selected"
        }
        {...attributes}
      />
      <span className={styles["o-form__file-icon"]} aria-label={label}>
        <IconCloudUpload />
      </span>
      {children && (
        <span className={styles["o-form__file-text"]}>{children}</span>
      )}
    </label>
  );
};

export default File;
