// @flow

import * as React from "react";
import cx from "classnames";
import "./Accordion.scss";

type Props = {
  items: [{ thumb: string, panel: string }],
  extraClasses?: string | Array | Object
};

const Accordion = (props: Props) => {
  const { items, extraClasses } = props;

  const AccordionClass = cx("o-accordion", extraClasses, "js-accordion");

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

export default Accordion;
