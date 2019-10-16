// @flow

import * as React from "react";
import cx from "classnames";
import "./tabs.scss";

type Props = {
  tabs: [
    {
      thumb: string,
      panel: string
    }
  ],
  metadata?: {
    contextClass?: string,
    additionalClasses?: Array<string>
  }
};

const Tabs = (props: Props) => {
  const { prop1, metadata = {} } = props;

  const TabsClass = cx(
    "o-tabs",
    metadata.contextClass,
    metadata.additionalClasses,
    "js-tabs"
  );

  return (
    props.tabs && (
      <div className={TabsClass}>
        <ul className="o-tabs__thumbs">
          {props.tabs.map((tab, index) => (
            <li
              className="o-tabs__thumb js-tabs-thumb wow fadeInUp"
              data-wow-delay={index > 0 && (index * 0.15)`s`}
            >
              <button className="o-tabs__button">{tab.thumb}</button>
            </li>
          ))}
        </ul>
        <ul className="o-tabs__panels">
          {props.tabs.map(tab => (
            <li className="o-tabs__panel js-tabs-panel">{tab.panel}</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Tabs;
