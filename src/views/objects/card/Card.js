// @flow

import * as React from "react";
import cx from "classnames";
import "./Card.scss";

type Props = {
  banner?: boolean | Node,
  bannerUrl?: string,
  header?: Node,
  footer?: Node,
  variant?:
    | "secondary"
    | "primary"
    | "hover"
    | "forward"
    | "active"
    | "banner-gradient",
  size?: "sm" | "lg",
  className?: string | Array<string> | Object,
  children?: Node,
};

const Card = ({
  banner,
  bannerUrl,
  header,
  children,
  footer,
  variant,
  size,
  className,
}: Props) => {
  const classNames = cx(
    "o-card",
    variant && `o-card--${variant}`,
    size && `o-card--${size}`,
    className
  );

  const Tag = !header ? "header" : "div";

  return (
    <section className={classNames}>
      {(banner || bannerUrl) && (
        <Tag
          className="o-card__banner"
          style={bannerUrl && { backgroundImage: `url(${bannerUrl})` }}
        >
          {banner}
        </Tag>
      )}
      {header && <header className="o-card__header">{header}</header>}
      {children && <div className="o-card__body">{children}</div>}
      {footer && <footer className="o-card__footer">{footer}</footer>}
    </section>
  );
};

export default Card;
