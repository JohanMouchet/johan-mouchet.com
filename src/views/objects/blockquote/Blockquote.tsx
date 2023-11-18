import clsx, { ClassValue } from "clsx";
import styles from "./Blockquote.module.scss";

export const Blockquote = ({
  quote,
  cite,
  pulled,
  className,
  ...props
}: {
  quote: React.ReactNode;
  cite?: string;
  pulled?: boolean;
  className?: ClassValue;
} & React.HTMLProps<HTMLQuoteElement>) => {
  const classNames = clsx(
    styles["o-blockquote"],
    pulled && styles["o-blockquote--pulled"],
    className
  );

  return (
    <blockquote className={classNames} {...props}>
      <div
        className={clsx(
          styles["o-blockquote__quotes"],
          "u-animation",
          "u-animation--fade-in"
        )}
      >
        {quote}
      </div>
      {cite && (
        <cite
          className={clsx(
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
