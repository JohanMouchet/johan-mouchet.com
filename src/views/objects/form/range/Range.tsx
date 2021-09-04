import React from "react";
import cx from "classnames";
import styles from "./Range.module.scss";

type Props = {
  id?: string;
  name: string;
  className?: string | string[] | { [key: string]: boolean };
  attributes?: boolean | number | string;
};

const Range: React.FC<Props> = ({ id, name, className, attributes }) => {
  const classNames = cx("o-form__range", className);

  return (
    <input
      id={id}
      type="range"
      name={name}
      className={classNames}
      {...attributes}
    />
  );
};

export default Range;
