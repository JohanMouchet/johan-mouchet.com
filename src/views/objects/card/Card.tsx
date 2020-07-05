import * as React from "react";
import cx from "classnames";
import "./Card.scss";

type Props = {
  bannerUrl?: string;
  bannerGradient?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "secondary" | "primary" | "hover" | "hover-active" | "forward";
  size?: "sm" | "lg";
  className?: string | string[] | { [key: string]: boolean };
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({
  bannerUrl,
  bannerGradient,
  header,
  children,
  footer,
  variant,
  size,
  className,
}) => {
  const classNames = cx(
    "o-card",
    bannerGradient && `o-card--banner-gradient`,
    variant && `o-card--${variant}`,
    size && `o-card--${size}`,
    className
  );

  return (
    <section className={classNames}>
      {bannerUrl && (
        <div
          className="o-card__banner"
          style={
            bannerUrl ? { backgroundImage: `url(${bannerUrl})` } : undefined
          }
        ></div>
      )}
      {header && <header className="o-card__header">{header}</header>}
      {children && <div className="o-card__body">{children}</div>}
      {footer && <footer className="o-card__footer">{footer}</footer>}
    </section>
  );
};

export default Card;
