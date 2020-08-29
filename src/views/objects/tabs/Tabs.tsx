import React from "react";
import cx from "classnames";
import "./Tabs.scss";

type Props = {
  tabs: Array<{
    thumb: string;
    panel: string;
  }>;
  className?: string | string[] | { [key: string]: boolean };
};

const Tabs: React.FC<Props> = ({ tabs, className }) => {
  const classNames = cx("o-tabs", className);

  return !tabs?.length ? null : (
    <div className={classNames}>
      <ul className="o-tabs__thumbs">
        {tabs.map((tab, index) => (
          <li
            className="o-tabs__thumb u-animation u-animation--fade-in-up"
            style={{
              animationDelay: index > 0 ? index * 0.15 + "s" : undefined,
            }}
            key={tab.thumb}
          >
            <button className="o-tabs__button" type="button">
              {tab.thumb}
            </button>
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
