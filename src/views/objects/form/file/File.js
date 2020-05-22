// @flow

import * as React from "react";
import cx from "classnames";
import { IconCloudUpload } from "views/objects";
import "./File.scss";

type Props = {
  id?: string,
  name: string,
  multipleCaption?: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node,
};

const File = ({
  id,
  name,
  multipleCaption,
  className,
  attributes,
  children,
}: Props) => {
  const classNames = cx("o-form__file", "o-button", className);

  return (
    <label className={classNames}>
      <input
        id={id}
        type="file"
        name={name}
        className="o-form__file-input"
        data-multiple-caption={
          multipleCaption ? multipleCaption : "{count} files selected"
        }
        {...attributes}
      />
      <span className="o-form__file-icon">
        <IconCloudUpload />
      </span>
      {children && <span className="o-form__file-text">{children}</span>}
    </label>
  );
};

export default File;
