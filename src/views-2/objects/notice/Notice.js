// @flow

import * as React from "react";
import cx from "classnames";
import "./Notice.scss";

type Props = {
  secondary?: Node,
  closeButton: boolean,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  },
  children?: Node
};

const Notice = (props: Props) => {
  const { secondary, closeButton, metadata = {}, children } = props;

  const NoticeClass = cx(
    "o-notice",
    metadata.contextClass,
    metadata.additionalClasses,
    "js-notice"
  );

  return (
    <div className={NoticeClass}>
      <div className="container container--lg">
        <div className="grid grid--yCenter-@xs">
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
                &#x2716;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Notice.defaultProps = {
  prop1: 2
};

export default Notice;
