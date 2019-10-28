// @flow

import * as React from "react";
import cx from "classnames";
import "./accordion.scss";

type Props = {
  items: [{ thumb: string, panel: string }],
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Accordion = (props: Props) => {
  const { items, metadata = {} } = props;

  const AccordionClass = cx(
    "o-accordion",
    metadata.contextClass,
    metadata.additionalClasses,
    "js-accordion"
  );

  // TODO: Choose active index, no fadeIn if active

  return !items ? null : (
    <ul className={AccordionClass}>
      {items.map((item, index) => (
        <li
          className={cx("o-accordion__item", "js-accordion-item", {
            "is--active": index === 0
          })}
          key={item.thumb}
        >
          <button className="o-accordion__thumb">
            <i
              className={cx("o-accordion__thumb-icon", "material-icons", {
                "wow fadeInLeft": index > 0
              })}
              data-wow-delay={index > 0 && index * 0.15 + "s"}
            >
              chevron_right
            </i>
            {item.thumb}
          </button>
          <p className="o-accordion__panel js-accordion-panel">{item.panel}</p>
        </li>
      ))}
    </ul>
  );
};

Accordion.defaultProps = {
  prop1: 2
};

export default Accordion;
