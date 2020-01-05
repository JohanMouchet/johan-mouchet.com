// @flow

import * as React from "react";
import cx from "classnames";
import "./File.scss";

type Props = {
  id?: string,
  name: string,
  multipleCaption?: string,
  className?: string | Array<string> | Object,
  attributes?: { [key: string]: any },
  children?: Node
};

const File = (props: Props) => {
  const { id, name, multipleCaption, className, attributes, children } = props;

  const classNames = cx("o-form__file", "o-button", "js-form-file", className);

  return (
    <label className={classNames}>
      <input
        id={id}
        type="file"
        name={name}
        className="o-form__file-input js-form-file-input"
        data-multiple-caption={
          multipleCaption ? multipleCaption : "{count} files selected"
        }
        {...attributes}
      />
      <i className="material-icons">file_upload</i>
      {children && (
        <span className="o-form__file-text js-form-file-text">{children}</span>
      )}
    </label>
  );
};

export { File };
