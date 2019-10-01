// @flow

import * as React from "react";
import cx from "classnames";
import "./tabs.scss";

type Props = {
  tabs.thumb: string,
  tabs.panel: string,
  [metadata.contextClass]: string,
  [metadata.additionalClasses]: array,
};

const Tabs = (props: Props) => {
  const { prop1, prop2 } = props;

  const TabsClass = cx(
    "o-tabs",
    props.metadata.contextClass,
    props.metadata.additionalClasses,
    "js-tabs",
    {
      "Tabs--prop1": prop1
    }
  );

  return (
    <div className={TabsClass}>
      <ul className="o-tabs__thumbs">
        {props.tabs.map((tab, index) => (
          <li
            className="o-tabs__thumb js-tabs-thumb wow fadeInUp"
            data-wow-delay={index > 0 && (index * 0.15)`s`}
          >
            <button className="o-tabs__button">
              {tab.thumb}
            </button>
          </li>
        ))}
      </ul>
      <ul className="o-tabs__panels">
        {props.tabs.map(tab => (
          <li
            className="o-tabs__panel js-tabs-panel"
          >
            {tab.panel}
          </li>
        ))}
      </ul>
    </div>
  );
};

Tabs.defaultProps = {
  prop1: 2
};

export default Tabs;
