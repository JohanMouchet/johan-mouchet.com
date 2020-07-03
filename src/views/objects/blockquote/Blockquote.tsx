import * as React from "react";
import cx from "classnames";
import "./Blockquote.scss";

type Props = {
  quote: React.ReactNode;
  cite?: string;
  pulled?: boolean;
  className?: string | string[] | { [key: string]: boolean };
};

const Blockquote = ({ quote, cite, pulled, className }: Props) => {
  const classNames = cx(
    "o-blockquote",
    className,
    pulled && "o-blockquote--pulled"
  );

  return (
    <blockquote className={classNames}>
      <div className="o-blockquote__quotes u-animation u-animation--fade-in">
        {quote}
      </div>
      {cite && (
        <cite className="o-blockquote__cite u-animation u-animation--fade-in">
          {cite}
        </cite>
      )}
    </blockquote>
  );
};

export default Blockquote;
