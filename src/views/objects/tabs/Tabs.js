// @flow

import * as React from "react";
import cx from "classnames";
import "./Tabs.scss";

type Props = {
  tabs: [
    {
      thumb: string,
      panel: string
    }
  ],
  className?: string | Array | Object
};

const Tabs = (props: Props) => {
  const { tabs, className } = props;

  const classNames = cx("o-tabs", className, "js-tabs");

  return !tabs ? null : (
    <div className={classNames}>
      <ul className="o-tabs__thumbs">
        {tabs.map((tab, index) => (
          <li
            className="o-tabs__thumb js-tabs-thumb wow fadeInUp"
            data-wow-delay={index > 0 && index * 0.15 + "s"}
            key={tab.thumb}
          >
            <button className="o-tabs__button">{tab.thumb}</button>
          </li>
        ))}
      </ul>
      <ul className="o-tabs__panels">
        {tabs.map((tab, index) => (
          <li className="o-tabs__panel js-tabs-panel" key={index}>
            {tab.panel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
