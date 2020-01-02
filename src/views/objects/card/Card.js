// @flow

import * as React from "react";
import cx from "classnames";
import "./Card.scss";

type Props = {
  banner?: boolean | Node,
  bannerUrl?: string,
  header?: Node,
  body?: Node,
  footer?: Node,
  variant?:
    | "secondary"
    | "primary"
    | "hover"
    | "forward"
    | "active"
    | "banner-gradient",
  size?: "sm" | "lg",
  className?: string | Array | Object
};

const Card = (props: Props) => {
  const {
    banner,
    bannerUrl,
    header,
    body,
    footer,
    variant,
    size,
    className
  } = props;

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
      {/* TODO: <Card><Header>Sub comp</Header></Card> */}
      {header && <header className="o-card__header">{header}</header>}
      {body && <div className="o-card__body">{body}</div>}
      {footer && <footer className="o-card__footer">{footer}</footer>}
    </section>
  );
};

export default Card;
