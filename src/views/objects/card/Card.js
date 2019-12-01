// @flow

import * as React from "react";
import cx from "classnames";
import "./Card.scss";

type Props = {
  variant?:
    | "secondary"
    | "primary"
    | "hover"
    | "forward"
    | "active"
    | "banner-gradient",
  size?: "sm" | "lg",
  banner?: boolean | Node,
  bannerUrl?: string,
  header?: Node,
  body?: Node,
  footer?: Node,
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>,
    modifierClasses?: Array<string>
  }
};

const Card = (props: Props) => {
  const {
    variant,
    size,
    banner,
    bannerUrl,
    header,
    body,
    footer,
    metadata = {}
  } = props;

  const CardClass = cx(
    "o-card",
    {
      [`o-card--${variant}`]: variant,
      [`o-card--${size}`]: size
    },
    metadata.contextClass,
    metadata.modifierClasses,
    metadata.additionalClasses
  );

  const Tag = !header ? "header" : "div";

  return (
    <section className={CardClass}>
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

Card.defaultProps = {
  prop1: 2
};

export default Card;
