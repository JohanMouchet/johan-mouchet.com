import React from "react";
import cx from "classnames";
import { IconChevronDown } from "views/objects";
import styles from "./Menu.module.scss";

type Submenu = {
  text: string;
  menu?: Menu;
};

type MenuItem = {
  text: string;
  url?: string;
};

type Menu = (MenuItem & Submenu)[];

type Props = {
  menu: Menu;
  className?: string | string[] | { [key: string]: boolean };
};

const Menu: React.FC<Props> = ({ menu, className }) => {
  const renderMenu = (
    menu: Menu,
    isSubmenu?: boolean,
    className?: string | string[] | { [key: string]: boolean }
  ) => {
    const classNames = cx(
      isSubmenu ? styles["o-menu__submenu"] : styles["o-menu"],
      className
    );

    return !menu?.length ? null : (
      <ul className={classNames}>
        {menu.map((item) => (
          <li
            className={cx(
              styles["o-menu__item"],
              item.menu && styles["o-menu__item--has-children"]
            )}
            key={item.text}
          >
            <a
              className={cx(
                styles["o-menu__link"],
                item.menu && styles["o-menu__submenu-heading"]
              )}
              href={item.url}
              tabIndex={!item.url ? 0 : undefined}
            >
              {item.text}
              {item.menu && <IconChevronDown />}
            </a>

            {item.menu && renderMenu(item.menu, true)}
          </li>
        ))}
      </ul>
    );
  };

  return renderMenu(menu, false, className);
};

export default Menu;
