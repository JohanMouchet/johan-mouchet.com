// @flow

import * as React from "react";
import cx from "classnames";
import "./Accordion.scss";

type Props = {
  items: [{ thumb: string, panel: string }],
  className?: string | Array | Object
};

const Accordion = (props: Props) => {
  const { items, className } = props;

  const classNames = cx("o-accordion", className, "js-accordion");

  // TODO: Choose active index, no fadeIn if active

  return !items ? null : (
    <ul className={classNames}>
      {items.map((item, index) => (
        <li
          className={cx(
            "o-accordion__item",
            "js-accordion-item",
            index === 0 && "is--active"
          )}
          key={item.thumb}
        >
          <button className="o-accordion__thumb">
            <i
              className={cx(
                "o-accordion__thumb-icon",
                "material-icons",
                index > 0 && "wow fadeInLeft"
              )}
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

export default Accordion;
