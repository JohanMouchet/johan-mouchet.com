// @flow

import * as React from "react";
import cx from "classnames";
import "./card.scss";

type Props = {
  banner: ?string,
  bannerUrl: ?string,
  header: ?string,
  body: ?string,
  footer: ?string,
  metadata: {
    contextClass: ?string,
    additionalClasses: ?Array<string>,
    modifierClasses: ?Array<string>
  }
};

const Card = (props: Props) => {
  const { prop1, prop2 } = props;

  const CardClass = cx(
    "o-card",
    props.metadata.contextClass,
    props.metadata.modifierClasses,
    props.metadata.additionalClasses,
    {
      "Card--prop1": prop1
    }
  );

  const Tag = !props.header ? "header" : "div";

  return (
    <section className={CardClass}>
      {(props.banner || props.bannerUrl) && (
        <Tag
          className="o-card__banner"
          style={
            props.bannerUrl && `backgroundImage: url('${props.bannerUrl}')`
          }
        >
          {props.banner === true ? "" : props.banner}
        </Tag>
      )}
      {/* TODO: <Card><Header>Sub comp</Header></Card> */}
      {props.header && (
        <header className="o-card__header">{props.header | raw}</header>
      )}
      {props.body && <div className="o-card__body">{props.body | raw}</div>}
      {props.footer && (
        <footer className="o-card__footer">{props.footer | raw}</footer>
      )}
    </section>
  );
};

Card.defaultProps = {
  prop1: 2
};

export default Card;
