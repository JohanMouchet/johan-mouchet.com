import clsx, { ClassValue } from "clsx";
import styles from "./Tabs.module.scss";

export const Tabs = ({
  tabs,
  className,
  ...props
}: {
  tabs: {
    active?: boolean;
    thumb: string;
    panel: string;
    onClick?: React.MouseEventHandler;
  }[];
  className?: ClassValue;
} & React.HTMLProps<HTMLDivElement>) => {
  if (!tabs?.length) {
    return null;
  }

  return (
    <div className={clsx(styles["o-tabs"], className)} {...props}>
      <ul className={styles["o-tabs__thumbs"]}>
        {tabs.map((tab, index) => (
          <li
            className={clsx(
              styles["o-tabs__thumb"],
              "u-animation",
              "u-animation--fade-in-up"
            )}
            style={{
              animationDelay: index > 0 ? `${index * 0.15}s` : undefined,
            }}
            key={tab.thumb}
          >
            <button
              className={clsx(
                styles["o-tabs__button"],
                tab.active && styles["o-tabs__button--active"]
              )}
              type="button"
              onClick={tab.onClick}
            >
              {tab.thumb}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles["o-tabs__panels"]}>
        {tabs.map((tab, index) => (
          <li
            className={clsx(
              styles["o-tabs__panel"],
              tab.active && styles["o-tabs__panel--active"]
            )}
            key={index}
          >
            {tab.panel}
          </li>
        ))}
      </ul>
    </div>
  );
};
