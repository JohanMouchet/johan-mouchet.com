import React from "react";
import cx from "classnames";
import styles from "./Blockquote.module.scss";

type Props = {
  quote: React.ReactNode;
  cite?: string;
  pulled?: boolean;
  className?: string | string[] | { [key: string]: boolean };
};

const Blockquote: React.FC<Props> = ({ quote, cite, pulled, className }) => {
  const classNames = cx(
    styles["o-blockquote"],
    pulled && styles["o-blockquote--pulled"],
    className
  );

  return (
    <blockquote className={classNames}>
      <div
        className={cx(
          styles["o-blockquote__quotes"],
          "u-animation",
          "u-animation--fade-in"
        )}
      >
        {quote}
      </div>
      {cite && (
        <cite
          className={cx(
            styles["o-blockquote__cite"],
            "u-animation",
            "u-animation--fade-in"
          )}
        >
          {cite}
        </cite>
      )}
    </blockquote>
  );
};

export default Blockquote;
