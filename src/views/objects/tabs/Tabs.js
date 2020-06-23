// @flow

import * as React from "react";
import cx from "classnames";
import "./Tabs.scss";

type Props = {
  tabs: [
    {
      thumb: string,
      panel: string,
    }
  ],
  className?: string | Array<string> | Object,
};

const Tabs = ({ tabs, className }: Props) => {
  const classNames = cx("o-tabs", className);

  return !tabs ? null : (
    <div className={classNames}>
      <ul className="o-tabs__thumbs">
        {tabs.map((tab, index) => (
          <li
            className="o-tabs__thumb u-animation u-animation--fade-in-up"
            style={{ animationDelay: index > 0 && index * 0.15 + "s" }}
            key={tab.thumb}
          >
            <button className="o-tabs__button">{tab.thumb}</button>
          </li>
        ))}
      </ul>
      <ul className="o-tabs__panels">
        {tabs.map((tab, index) => (
          <li className="o-tabs__panel" key={index}>
            {tab.panel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
