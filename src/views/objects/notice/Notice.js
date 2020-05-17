// @flow

import * as React from "react";
import cx from "classnames";
import { IconX } from "views/objects";
import "./Notice.scss";

type Props = {
  secondary?: string,
  closeButton: boolean,
  isActive?: boolean,
  className?: string | Array<string> | Object,
  children?: Node,
};

const Notice = ({
  secondary,
  closeButton,
  isActive,
  className,
  children,
}: Props) => {
  const classNames = cx(
    "o-notice",
    isActive && "is--active",
    className,
    "js-notice"
  );

  return (
    <div className={classNames}>
      <div className="container container--lg">
        <div className="grid grid--yCenter-@xs grid--noWrap-@xs">
          <div className="cell cell--@xs">
            <div className="o-notice__primary">{children}</div>
          </div>
          {secondary && (
            <div className="cell cell--0-@xs">
              <div className="o-notice__secondary">{secondary}</div>
            </div>
          )}
          {closeButton && (
            <div className="cell cell--0-@xs">
              <button className="o-notice__close js-notice-close">
                <IconX />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notice;
