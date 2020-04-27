// @flow

import * as React from "react";
import cx from "classnames";
import "./Layout.scss";

type Props = {
  id?: string,
  block: boolean,
  className?: string | Array<string> | Object,
  children?: Node,
};

const Label = ({ id, block, className, children }: Props) => {
  const classNames = cx(
    "o-form__label",
    (block || !children) && "o-form__label--block",
    className
  );

  return (
    <label htmlFor={id} className={classNames}>
      {children || "&nbsp;"}
    </label>
  );
};

export default Label;
