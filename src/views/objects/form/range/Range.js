// @flow

import * as React from "react";
import cx from "classnames";
import "./Range.scss";

type Props = {
  id?: string,
  name: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any }
};

const Range = ({ id, name, className, attributes }: Props) => {
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
