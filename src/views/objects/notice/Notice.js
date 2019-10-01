// @flow

import * as React from "react";
import cx from "classnames";
import "./notice.scss";

type Props = {
  primary: string,
  [secondary]: string,
  closeButton: boolean,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
};

const Notice = (props: Props) => {
  const { prop1, prop2 } = props;

  const NoticeClass = cx(
    "o-notice",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    "js-notice",
    {
      "Notice--prop1": prop1
    }
  );

  return (
    <div className={NoticeClass}>
      <div className="container container--lg">
        <div className="grid grid--yCenter-@xs">
          <div className="cell cell--@xs">
            <div className="o-notice__primary">
              {props.primary | raw}
            </div>
          </div>
          {props.secondary && (
            <div className="cell cell--0-@xs">
              <div
                className="o-notice__secondary"
              >
                {props.secondary | raw}
              </div>
            </div>
          )}
          {props.closeButton && (
            <div className="cell cell--0-@xs">
              <button
                className="o-notice__close js-notice-close"
              >
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
