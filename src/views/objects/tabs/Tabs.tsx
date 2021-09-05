import React from "react";
import cx from "classnames";
import styles from "./Tabs.module.scss";

type Props = {
  tabs: Array<{
    thumb: string;
    panel: string;
  }>;
  className?: string | string[] | { [key: string]: boolean };
};

const Tabs: React.FC<Props> = ({ tabs, className }) => {
  const classNames = cx(styles["o-tabs"], className);

  return !tabs?.length ? null : (
    <div className={classNames}>
      <ul className={styles["o-tabs__thumbs"]}>
        {tabs.map((tab, index) => (
          <li
            className="o-tabs__thumb u-animation u-animation--fade-in-up"
            style={{
              animationDelay: index > 0 ? `${index * 0.15}s` : undefined,
            }}
            key={tab.thumb}
          >
            <button className={styles["o-tabs__button"]} type="button">
              {tab.thumb}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles["o-tabs__panels"]}>
        {tabs.map((tab, index) => (
          <li className={styles["o-tabs__panel"]} key={index}>
            {tab.panel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
